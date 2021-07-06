export default function WorkExperiences(props) {
  return (
    <div className="work-container">
      <img src={props.img}></img>
      <div className="work-section">
        <span>{props.title}</span>
        <div className="work-company">
        <span>{props.company}</span>
        <span>{props.date}</span>
        </div>
        
        <p>{props.children}</p>
      </div>
    </div>
  );
}
