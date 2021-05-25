import './Main.css';
import Button from './layout/Button';
export default function Main(props) {
  return (
    <div className="main-container">
      <div className="main-logo">{props.name}</div>
      <div className="buttons">
        <Button className="specialcase" character="P" />
        <Button character="W" />
        <Button character="C" />
        <Button className="specialcase" character="A" />
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
