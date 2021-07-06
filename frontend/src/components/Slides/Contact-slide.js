
import Logo from './layout/Logo';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TiltButton from './layout/Button';
import './Slides.css';




export default function (props) {
  function Copy(event){
    // outputField.focus();
    const el = document.createElement('textarea');
    el.value = 'nigel.ngyanhing@mail.utoronto.ca';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
      alert('Email copied to clipboard');
   
}
  // const [edit, setedit] = useState(false)
  // const [description, setdescription] = useState("");
  // function submitEdit(){
  //   props.ChangeHandler(props.name, description);
  //   setedit(false);
  // }
  return (

        <div className="icons-slides">
          <TiltButton>
            <a href="https://www.linkedin.com/in/owen-ng-56b87a1a3/"><LinkedInIcon id="linkedin" /></a>
          </TiltButton>
          <TiltButton>
          <a href="https://github.com/Owen-Ng"><GitHubIcon id="github" /></a>
          </TiltButton>
          <TiltButton >
            <MailOutlineIcon id="mail" onClick={()=>{Copy()}}/>
          </TiltButton>
          {/* <TiltButton>
            <FacebookIcon id="facebook" />
          </TiltButton>
          <TiltButton>
            <TwitterIcon id="twitter" />
          </TiltButton>
          <TiltButton>
            <InstagramIcon id="instagram" />
          </TiltButton> */}
        </div>
  )}
    

     
/* 
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
      </div> */
    // </div>
  // );

