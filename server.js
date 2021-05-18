const log = console.log;
const express = require('express');
const app = express();
const model = require('./model.js');
const cors = require('cors');

const bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync('B4c0//', salt);

app.use(express.json());
app.use(cors());

const session = require('express-session');
const { Pool } = require('pg');
app.use(express.urlencoded({ extended: true }));

require('dotenv').config();
const fs = require('fs');
console.log(process.env.USER);
const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB,
  ssl: {
    ca: fs.readFileSync('./cc-ca.crt').toString(),
  },
});

//create a session cookie
app.use(
  session({
    secret: 'oursecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
      httpOnly: true,
    },
  })
);

app.post('/api/login', async (req, res) => {
  try {
    let { email, password } = req.body;
    let sql = 'SELECT password, id FROM Users WHERE email = $1 ';
    let exec = await pool.query(sql, [email]);
    if (exec.rowCount != 1) {
      return res.status(404).json({ email: 'Email not Found' });
    }
    let encrypted = exec.rows[0].password;

    if (bcrypt.compareSync(password, encrypted)) {
      req.session.user_id = exec.rows[0].id;
      return res.status(200).json({ message: 'success' });
    } else {
      return res.status(400).json({ message: 'password is wrong' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal Error' });
  }
});

app.get('/users/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.status(500).json({ message: 'Logoust Unsuccessful' });
    } else {
      res.status(200).json({ message: 'Logout Successful' });
    }
  });
});

app.post('/api/register', async (req, res) => {
  try {
    let { email, name, password } = req.body;
    let validation = model.lengthchecker(email, password, name);
    if (validation != '') {
      return res.status(400).json({ message: validation });
    }
    password = bcrypt.hashSync(password, hash);

    let sql = 'SELECT * FROM users WHERE email = $1';
    let exec = await pool.query(sql, [email]);

    if (exec.rowCount >= 1) {
      return res.status(404).json({ message: 'Email already in use' });
    }

    sql = 'INSERT INTO Users (name, email, password) VALUES ($1, $2, $3);';
    exec = await pool.query(sql, [name, email, password]).then((res, err) => {
      if (err) {
        return false;
      }
      if (res) {
        return true;
      }
    });

    if (exec) {
      res.status(200).json({ message: 'success' });
    } else {
      res.status(400).json({ message: 'Error' });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal Error' });
  }
});

app.delete('/api/user/delete', async (req, res) => {
  const { email, password, name } = req.body;
  let validation = model.lengthchecker(email, password, name);
  if (validation != '') {
    return res.status(400).json({ message: validation });
  }

  let sql = 'SELECT password FROM Users WHERE email = $1 ';
  let exec = await pool.query(sql, [email]);
  if (exec.rowCount != 1) {
    return res.status(404).json({ email: 'Email not Found' });
  }
  let encrypted = exec.rows[0].password;

  if (!bcrypt.compareSync(password, encrypted)) {
    return res.status(400).json({ message: 'password is wrong' });
  }

  sql = 'DELETE FROM users WHERE email = $1 and name = $2';

  exec = await pool.query(sql, [email, name]).then((res, err) => {
    console.log(res);
    if (res.rowCount == 1) {
      return true;
    } else {
      return false;
    }
  });

  if (exec) {
    res.status(200).json({ message: 'success' });
  } else {
    res.status(400).json({ message: 'Error' });
  }
});

app.patch('/api/user', async (req, res) => {
  const { oldname, oldpassword, newname, newpassword, email } = req.body;
  let validation = model.lengthchecker(email, oldpassword, oldname);
  if (validation != '') {
    return res.status(400).json({ message: validation });
  }
  validation = model.lengthchecker(email, newpassword, newname);
  if (validation != '') {
    return res.status(400).json({ message: validation });
  }
  let sql = 'SELECT password, name FROM Users WHERE email = $1 ';
  let exec = await pool.query(sql, [email]);
  console.log(exec);
  if (exec.rowCount != 1) {
    return res.status(404).json({ email: 'Email not Found' });
  }
  let encrypted = exec.rows[0];

  if (!bcrypt.compareSync(oldpassword, encrypted.password)) {
    return res.status(400).json({ message: 'password is wrong' });
  }

  if (!(encrypted.name == oldname)) {
    console.log(encrypted.name + oldname);
    return res.status(400).json({ message: 'name or email is wrong' });
  }
  sql = 'UPDATE Users SET password = $1, name = $2 WHERE email = $3';

  exec = await pool
    .query(sql, [bcrypt.hashSync(newpassword, hash), newname, email])
    .then((res, err) => {
      if (res) {
        return res;
      } else {
        return false;
      }
    });

  if (exec) {
    res.status(200).json({ message: 'success' });
  } else {
    res.status(200).json({ message: 'Error' });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    let { p_id, title, project, github, description, logo } = req.body;
    let sql =
      'INSERT INTO projects (project_id, id, title, project_link, github_link, description, logo_image) VALUES ($1, $2, $3, $4, $5, $6, $7); ';
    let exec = await pool
      .query(sql, [
        p_id,
        req.session.user_id,
        title,
        project,
        github,
        description,
        logo,
      ])
      .then((res, err) => {
        if (res.rowCount == 1) {
          return res;
        } else {
          return false;
        }
      });

    if (exec) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(200).json({ message: 'Not Success!' });
    }
  } catch (err) {
    log(err);
    res.status(500).json({ message: 'Internal Error' });
  }
});

app.delete('/api/projects', async (req, res) => {
  try {
    const userid = req.session.user_id;
    const p_id = req.body.id;
    log(p_id + '  ' + userid);
    let sql = 'DELETE FROM projects WHERE project_id = $1 and id = $2';
    let exec = await pool.query(sql, [p_id, userid]).then((res, err) => {
      log(res);
      if (res.rowCount == 1) {
        return res;
      } else {
        return false;
      }
    });
    if (exec) {
      return res.status(200).json({ message: 'Success' });
    } else {
      return res.status(400).json({ message: 'Failed' });
    }
  } catch (err) {
    log(err);
    return res.status(500).json({ message: 'Internal Error' });
  }
});

app.patch('/api/projects', async (req, res) => {
  try {
    let { id, title, project, github, description, logo } = req.body;
    let sql =
      'UPDATE projects SET github_link = $1, project_link = $2, description = $3, logo_image = $4, title = $5 WHERE project_id = $6 and id = $7';
    let exec = await pool
      .query(sql, [
        github,
        project,
        description,
        logo,
        title,
        id,
        req.session.user_id,
      ])
      .then((res, err) => {
        if (res.rowCount == 1) {
          return res;
        } else {
          return false;
        }
      });

    if (exec) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(200).json({ message: 'Not Success!' });
    }
  } catch (err) {
    log(err);
    res.status(500).json({ message: 'Internal Error' });
  }
});
app.get('/api/projects', async (req, res) => {
  try {
    let user_id = req.session.user_id;
    let p_id = req.body.p_id;
    let sql =
      'SELECT title, project_link, github_link, description, logo_image FROM projects WHERE project_id = $1 and id = $2';
    let exec = await pool.query(sql, [p_id, user_id]);
    log(exec);
    log(p_id);
    log(user_id);
    return res.status(200).json({ message: 'Success', data: exec.rows });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
});

app.post('/api/workexperiences', async (req, res) => {
  try {
    let {
      w_id,
      role,
      company_logo,
      company_name,
      start_date,
      end_date,
      description,
    } = req.body;
    let sql =
      'INSERT INTO Work_experiences (w_id, id, role, company_logo, company_name, start_date, end_date, description ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8); ';
    let exec = await pool
      .query(sql, [
        w_id,
        req.session.user_id,
        role,
        company_logo,
        company_name,
        start_date,
        end_date,
        description,
      ])
      .then((res, err) => {
        if (res.rowCount == 1) {
          return res;
        } else {
          return false;
        }
      });

    if (exec) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(200).json({ message: 'Not Success!' });
    }
  } catch (err) {
    log(err);
    res.status(500).json({ message: 'Internal Error' });
  }
});

app.delete('/api/workexperiences', async (req, res) => {
  try {
    const userid = req.session.user_id;
    const w_id = req.body.w_id;
    log(p_id + '  ' + userid);
    let sql = 'DELETE FROM projects WHERE w_id = $1 and id = $2';
    let exec = await pool.query(sql, [w_id, userid]).then((res, err) => {
      log(res);
      if (res.rowCount == 1) {
        return res;
      } else {
        return false;
      }
    });
    if (exec) {
      return res.status(200).json({ message: 'Success' });
    } else {
      return res.status(400).json({ message: 'Failed' });
    }
  } catch (err) {
    log(err);
    return res.status(500).json({ message: 'Internal Error' });
  }
});

app.patch('/api/workexperiences', async (req, res) => {
  try {
    let {
      w_id,
      role,
      company_logo,
      company_name,
      start_date,
      end_date,
      description,
    } = req.body;
    let sql =
      'UPDATE projects SET role = $1, company_logo = $2, company_name = $3, start_date = $4, end_date = $5, description = $6 WHERE w_id = $7 and id = $8';
    let exec = await pool
      .query(sql, [
        role,
        company_logo,
        company_name,
        start_date,
        end_date,
        description,
        w_id,
        req.session.user_id,
      ])
      .then((res, err) => {
        if (res.rowCount == 1) {
          return res;
        } else {
          return false;
        }
      });

    if (exec) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(200).json({ message: 'Not Success!' });
    }
  } catch (err) {
    log(err);
    res.status(500).json({ message: 'Internal Error' });
  }
});
app.get('/api/workexperiences', async (req, res) => {
  try {
    let user_id = req.session.user_id;
    let w_id = req.body.w_id;
    let sql =
      'SELECT title, project_link, github_link, description, logo_image FROM projects WHERE w_id = $1 and id = $2';
    let exec = await pool.query(sql, [w_id, user_id]);
    log(exec);
    log(p_id);
    log(user_id);
    return res.status(200).json({ message: 'Success', data: exec.rows });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
});

//contact

app.post('/api/contact', async (req, res) => {
  try {
    let { facebook, Linkedin, github, email, twitter, instagram } = req.body;
    let sql =
      'INSERT INTO Contacts (id, facebook, Linkedin, github, email, twitter, instagram)  ($1, $2, $3, $4, $5, $6, $7); ';
    let exec = await pool
      .query(sql, [
        req.session.user_id,
        facebook,
        Linkedin,
        github,
        email,
        twitter,
        instagram,
      ])
      .then((res, err) => {
        if (res.rowCount == 1) {
          return res;
        } else {
          return false;
        }
      });

    if (exec) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(200).json({ message: 'Not Success!' });
    }
  } catch (err) {
    log(err);
    res.status(500).json({ message: 'Internal Error' });
  }
});

app.patch('/api/contact', async (req, res) => {
  try {
    let { facebook, Linkedin, github, email, twitter, instagram } = req.body;
    let sql =
      'UPDATE contacts SET facebook = $1, Linkedin = $2, github = $3, email = $4, twitter = $5, instagram = $6 WHERE  id = $7';
    let exec = await pool
      .query(sql, [
        facebook,
        Linkedin,
        github,
        email,
        twitter,
        instagram,
        req.session.user_id,
      ])
      .then((res, err) => {
        if (res.rowCount == 1) {
          return res;
        } else {
          return false;
        }
      });

    if (exec) {
      res.status(200).json({
        message: 'Success',
        facebook,
        Linkedin,
        github,
        email,
        twitter,
        instagram,
      });
    } else {
      res.status(200).json({ message: 'Not Success!' });
    }
  } catch (err) {
    log(err);
    res.status(500).json({ message: 'Internal Error' });
  }
});
app.get('/api/contact', async (req, res) => {
  try {
    let user_id = req.session.user_id;
    let sql =
      'SELECT facebook, Linkedin, github, email, twitter, instagram FROM projects WHERE id = $2';
    let exec = await pool.query(sql, [user_id]);
    log(exec);
    log(p_id);
    log(user_id);
    return res.status(200).json({ message: 'Success', data: exec.rows });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
});

//About

app.post('/api/about', async (req, res) => {
  try {
    let { description, author, hobbies } = req.body;
    let sql =
      'INSERT INTO Work_experiences (id, description, author, hobbies ) VALUES ($1, $2, $3, $4); ';
    let exec = await pool
      .query(sql, [req.session.user_id, description, author, hobbies])
      .then((res, err) => {
        if (res.rowCount == 1) {
          return res;
        } else {
          return false;
        }
      });

    if (exec) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(200).json({ message: 'Not Success!' });
    }
  } catch (err) {
    log(err);
    res.status(500).json({ message: 'Internal Error' });
  }
});

app.delete('/api/about', async (req, res) => {
  try {
    const userid = req.session.user_id;
    log(p_id + '  ' + userid);
    let sql = 'DELETE FROM projects WHERE id = $1';
    let exec = await pool.query(sql, [userid]).then((res, err) => {
      log(res);
      if (res.rowCount == 1) {
        return res;
      } else {
        return false;
      }
    });
    if (exec) {
      return res.status(200).json({ message: 'Success' });
    } else {
      return res.status(400).json({ message: 'Failed' });
    }
  } catch (err) {
    log(err);
    return res.status(500).json({ message: 'Internal Error' });
  }
});

app.patch('/api/about', async (req, res) => {
  try {
    let { description, author, hobbies } = req.body;
    let sql =
      'UPDATE projects SET description = $1, author = $2, hobbies = $3 WHERE  id = $4';
    let exec = await pool
      .query(sql, [description, author, hobbies, req.session.user_id])
      .then((res, err) => {
        if (res.rowCount == 1) {
          return res;
        } else {
          return false;
        }
      });

    if (exec) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(200).json({ message: 'Not Success!' });
    }
  } catch (err) {
    log(err);
    res.status(500).json({ message: 'Internal Error' });
  }
});
app.get('/api/about', async (req, res) => {
  try {
    let user_id = req.session.user_id;
    let sql =
      'SELECT description, author, hobbies FROM projects WHERE  id = $1';
    let exec = await pool.query(sql, [user_id]);
    log(exec);
    log(p_id);
    log(user_id);
    return res.status(200).json({ message: 'Success', data: exec.rows });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
});

app.use(express.static(__dirname + '/frontend/build'));

app.get('*', (req, res) => {
  const goodPagesRoutes = [
    '/',
    '/home',
    '/projects',
    '/workexperiences',
    '/about',
    '/contact',
  ];

  if (!goodPagesRoutes.includes(req.url)) {
    res.status(404);
  }
  res.sendFile(__dirname + '/frontend/build/index.html');
});

const port = 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
