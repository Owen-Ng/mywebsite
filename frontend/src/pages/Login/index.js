import { Container } from '@material-ui/core';
import './index.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export default function Login() {
  return (
    <section className="container">
      <div className="box">
        <div className="form">
          <h1>MYO Website </h1>
          <h2>Login</h2>
          <form>
            <div className="inputBx">
              <input type="text" placeholder="Email" />
              <AccountCircleIcon className="icons" />
            </div>

            <div className="inputBx">
              <input type="password" placeholder="Password" />
              <LockIcon className="icons" />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: 'white', paddingBlock: 15 }}
                  name="checkedA"
                />
              }
              label="Remember me"
            />
            <div className="inputBx">
              <input type="submit" value="Login" />
            </div>
          </form>
          <span>
            Forget <a href="https://www.google.com/">Password</a>
          </span>
        </div>
      </div>
    </section>
  );
}
