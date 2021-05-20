import { Link } from 'react-router-dom';
import './Bar.css';
export default function Bar(props) {
  return (
    <div className="bar">
      <Link to="/home">{props.name}</Link>
    </div>
  );
}
