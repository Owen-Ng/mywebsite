export default function WorkExperiences(props) {
  return (
    <div className="work-container">
      <img src={props.img}></img>
      <div className="work-section">
        <span>{props.title}</span>
        <span>{props.company}</span>
        <p>{props.children}</p>
      </div>
    </div>
  );
}
