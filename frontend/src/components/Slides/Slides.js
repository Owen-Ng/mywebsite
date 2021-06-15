import ViewMore from './layout/ViewMore';
import Logo from './layout/Logo';
import Description from './layout/Description';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Contacts from './Contact-slide'
import './Slides.css';
import {useState} from "react";
export default function Slides(props) {
  const [edit, setedit] = useState(false)
  const [description, setdescription] = useState("");
  function submitEdit(){
    props.ChangeHandler(props.name, description);
    setedit(false);
  }
  
  return (
    <div>
      
    <div className="Slides-container">
      
      <div className="left-box">
        <Logo title={props.title} />

        {props.title === "Contacts"? <Contacts/>: <ViewMore link={props.link} />}
      </div>

      <div className="right-box">
        {edit? <textarea id="textBox" type="text" value={description} name="Input" onChange={(e)=>setdescription(e.target.value)}></textarea> : <Description description={props.description} /> }
        
      </div >
      <div id = "edit">
      <IconButton  aria-label="edit" size="large" onClick={()=>{setedit(!edit)}}>
        <EditIcon fontSize="large"/>
      </IconButton>
      {edit?<Button variant="contained" color="primary" onClick={()=> submitEdit()} > 
        Submit
      </Button>:""}
      </div>
    </div>
    
  </div>
  );
}
