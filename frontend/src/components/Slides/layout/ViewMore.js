import { Link, useHistory } from 'react-router-dom';
function Navigate(link) {
  useHistory().push(link, { from: link });
}
export default function View(props) {
  const history = useHistory();
  return (
    <button
      onClick={() => {
        history.push(props.link);
      }}
      className="viewmore"
    >
      {/* <Link to={props.link}>View more </Link> */}
      View more
    </button>
  );
}
