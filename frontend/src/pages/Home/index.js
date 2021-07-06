import './index.css';
import Bar from '../../components/Bar/Bar';
import Main from '../../components/Main-page/Main';
import Slides from '../../components/Slides/Slides';
import Contact_slide from '../../components/Slides/Contact-slide';
import Button from '@material-ui/core/Button';
import {AnimatePresence, motion} from "framer-motion";

import {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Home(props) {
  const history = useHistory();
  let scrolls = []
  const [descriptions, setdescriptions] = useState(
    {projectsdescription:"",
    workdescription:"",
    contactdescription:"",
    aboutdescription:""
          });
  function ChangeDescription(name, description){
    setdescriptions(prev=> {
      return {...prev, [name]:description}
    });
  }
  function Logout(){
    history.push('/login');
    //Some fetch will go here
  }
  return (
    <div>
    <motion.div initial ="out"  animate="in" exit="out" variants={props.pageTransitions}>
      <Bar name={'Owen'} />
      {/* <Button id="logout" onClick={Logout}>Log out</Button> */}
      <div ref = {(ref) => {scrolls[4] = ref}}>
      <Main name={'Owen'} scrolls={scrolls}/>

      </div>
     

      <div ref = {(ref) => {scrolls[0] = ref}}>
          <Slides 
            title="Projects"
            link="/projects"
            description="Here you can learn about the projects I worked on"
            name ="projectsdescription"
            ChangeHandler={ChangeDescription}
          />
      </div>
    

      <div ref = {(ref) => {scrolls[1] = ref}}>
          <Slides 
            title="Work Experiences"
            link="/workexperiences"
            name="workdescription"
            description="Here you can find details about my work experiences"
            ChangeHandler={ChangeDescription}
          />
      </div>
  

      <div ref = {(ref) => {scrolls[2] = ref}}>
      <Slides
        title="Contacts"
        name="contactdescription"
        description="You can find my contact informations by clicking on any of the widget circle"
        ChangeHandler={ChangeDescription}
      />
      </div>


      <div ref = {(ref) => {scrolls[3] = ref}}>
      <Slides 
        title="About"
        link="/about"
        name = "aboutdescription"
        description="Here you can find more personal details about me"
        ChangeHandler={ChangeDescription}
      />
      </div>
       

       
      


    </motion.div>
          <img className="up" src="/images/up.png" onClick={()=>{scrolls[4].scrollIntoView({behavior:'smooth'})}}/> 
      </div>
  );
}
