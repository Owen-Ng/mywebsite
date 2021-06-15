import ViewMore from './layout/ViewMore';
import Logo from './layout/Logo';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Description from './layout/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Slides.css';
import TiltButton from './layout/Button';
import test from './images/test.png';
import {useState} from 'react'
export default function Projects(props) {
  const [edit, setedit] = useState(false)
  const [description, setdescription] = useState("");
  return (
    <div style={{ backgroundImage: ``, height: '50vh' }}>
      <div className="project-header">
        <div className="icons-slides project-icon">
          <div>
          <TiltButton>
            <img src={test} />
          </TiltButton>
          {edit? <input type='text'  />: ""}
          </div>

          <div>
          <TiltButton>
            <GitHubIcon id="github" />
          </TiltButton>
          {edit? <input type='text'  />: ""}
          </div>
        </div>
        {edit? <input type='date'  />:<span>{props.date}</span>}
      </div>
      <div className="project-description">
        {edit? <textarea id="textBox" type="text" value={description} name="Input"/> :<Description description={props.description} />}
      </div>
      <div id = "edit">
      <IconButton  aria-label="edit" size="large" onClick={()=>{setedit(!edit)}}>
        <EditIcon fontSize="large"/>
      </IconButton>
      {edit?<Button variant="contained" color="primary" onClick={()=> {}} > 
        Submit
      </Button>:""}
      </div>
    </div>
  );
}
