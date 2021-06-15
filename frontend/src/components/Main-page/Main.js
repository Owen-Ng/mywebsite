import './Main.css';
import Button from './layout/Button';
export default function Main(props) {
  return (
    <div className="main-container">
      <div className="main-logo">{props.name}</div>
      <div className="buttons">
        <div onClick={()=>props.scrolls[0].scrollIntoView({behavior: "smooth"})} >
          <Button  className="specialcase" character="P" onClick={()=>{console.log("test")
          props.scrolls[0].scrollIntoView()} }/>

        </div>
        <div onClick={()=>props.scrolls[1].scrollIntoView({behavior: "smooth"})} >
        <Button character="W" onClick={()=>props.scrolls[1].scrollIntoView()} />
        </div>

        <div onClick={()=>props.scrolls[2].scrollIntoView({behavior: "smooth"})} >
        <Button character="C" onClick={()=>props.scrolls[2].scrollIntoView()} />
        </div>

        <div onClick={()=>props.scrolls[3].scrollIntoView({behavior: "smooth"})} >
        <Button className="specialcase" character="A" onClick={()=>props.scrolls[3].scrollIntoView()} />
        </div>

      </div>
      <div className="glowing">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
