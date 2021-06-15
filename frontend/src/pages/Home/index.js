import './index.css';
import Bar from '../../components/Bar/Bar';
import Main from '../../components/Main-page/Main';
import Slides from '../../components/Slides/Slides';
import Contact_slide from '../../components/Slides/Contact-slide';
import Button from '@material-ui/core/Button';
import {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Home() {
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
      <Bar name={'Owen'} />
      <Button id="logout" onClick={Logout}>Log out</Button>
      <Main name={'Owen'} scrolls={scrolls}/>

      <div ref = {(ref) => {scrolls[0] = ref}}>
          <Slides 
            title="Projects"
            link="/projects"
            description={descriptions.projectsdescription}
            name ="projectsdescription"
            ChangeHandler={ChangeDescription}
          />
      </div>

      <div ref = {(ref) => {scrolls[1] = ref}}>
          <Slides 
            title="Work Experiences"
            link="/workexperiences"
            name="workdescription"
            description={descriptions.workdescription}
            ChangeHandler={ChangeDescription}
          />
      </div>

      <div ref = {(ref) => {scrolls[2] = ref}}>
      <Slides
        title="Contacts"
        name="contactdescription"
        description={descriptions.contactdescription}
        ChangeHandler={ChangeDescription}
      />
      </div>


      <div ref = {(ref) => {scrolls[3] = ref}}>
      <Slides 
        title="About"
        link="/about"
        name = "aboutdescription"
        description={descriptions.aboutdescription}
        ChangeHandler={ChangeDescription}
      />
      </div>


    </div>
  );
}
