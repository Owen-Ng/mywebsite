import ViewMore from './layout/ViewMore';
import Logo from './layout/Logo';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Description from './layout/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Slides.css';
import TiltButton from './layout/Button';
// import test from './images/test.png';
import {useState} from 'react'
export default function Projects(props) {
  const [edit, setedit] = useState(false)
  const [description, setdescription] = useState("");
  return (
    <div style={{ backgroundImage: ``, height: 'auto' }}>
      <div className="project-header">
        <div className="icons-slides project-icon">
          <div>
          {props.projectlink?
          <TiltButton>
            <a href={props.projectlink}>
            {props.projectImage?<img src={props.projectImage} />:<img src={"./images/No_Image_Available.jpg"}/>}
            </a>
        </TiltButton>:
          ""}
          
          {edit? <input type='text'  />: ""}
          </div>

          <div>
            
          <TiltButton>
          <a href={props.githublink}>
          <GitHubIcon id="github" />
          </a>
          </TiltButton>
          {edit? <input type='text'  />: ""}
          </div>
        </div>
        {edit? <input type='date'  />:<span>{props.date}</span>}
      </div>
      <div className="project-description">
        <h3>{props.title}</h3>
        {edit? <textarea id="textBox" type="text" value={description} name="Input"/> :<Description description={props.description} />}
      </div>
      <div id = "edit">
      {/* <IconButton  aria-label="edit" size="large" onClick={()=>{setedit(!edit)}}>
        <EditIcon fontSize="large"/>
      </IconButton> */}
      {edit?<Button variant="contained" color="primary" onClick={()=> {}} > 
        Submit
      </Button>:""}
      </div>
    </div>
  );
}
