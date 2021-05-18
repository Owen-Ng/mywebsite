function lengthchecker(email, password, name) {
  //   const { email, password, name } = data;
  let output = '';
  if (email.length <= 0 || email.length > 50) {
    output = 'Invalid Email';
  }

  if (name.length <= 0 || name.length > 10) {
    output = 'Invalid Name';
  }

  if (password.length <= 8) {
    output = 'Invalid password';
  }
  return output;
}

module.exports = { lengthchecker };
