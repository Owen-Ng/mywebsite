import { Link, useHistory } from 'react-router-dom';
import './subBar.css';
import ReplyIcon from '@material-ui/icons/Reply';
export default function Bar(props) {
  const history = useHistory();
  return (
    <div className="subbar">
      <ReplyIcon onClick={() => history.goBack()} />

      <h2>{props.title}</h2>
      <Link to="/home">{props.name}</Link>
    </div>
  );
}
