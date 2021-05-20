import ViewMore from './layout/ViewMore';
import Logo from './layout/Logo';
import Description from './layout/Description';
import './Slides.css';
export default function (props) {
  return (
    <div className="Slides-container">
      <div className="left-box">
        <Logo title={props.title} />

        <ViewMore />
      </div>

      <div className="right-box">
        <Description description={props.description} />
      </div>
    </div>
  );
}
