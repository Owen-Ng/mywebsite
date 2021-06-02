import ViewMore from './layout/ViewMore';
import Logo from './layout/Logo';
import Description from './layout/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Slides.css';
import TiltButton from './layout/Button';
import test from './images/test.png';
export default function Projects(props) {
  return (
    <div style={{ backgroundImage: `url(${test})`, height: '50vh' }}>
      <div className="project-header">
        <div className="icons-slides project-icon">
          <TiltButton>
            <img src={test} />
          </TiltButton>
          <TiltButton>
            <GitHubIcon id="github" />
          </TiltButton>
        </div>
        <span>{props.date}</span>
      </div>
      <div className="project-description">
        <Description description={props.description} />
      </div>
    </div>
  );
}
