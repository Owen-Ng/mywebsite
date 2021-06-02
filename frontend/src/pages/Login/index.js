import { Container } from '@material-ui/core';
import './index.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useState} from "react"
export default function Login() {
  const [userinfo, setuserinfo] = useState({email:"", password: "", remember:false});

  function HandleSubmit(event){
    event.preventDefault();
    console.log(userinfo);
    return false
  }
  function ChangeHandler(event){
    const name = event.target.name 
    const val = event.target.value
    //prev get old states
    setuserinfo(prev =>{
      return {...prev, [name]: val }
    })
   
  }
  function CheckboxHandler(event){
    const name = event.target.name
    const val = event.target.checked
    //prev get old states
    setuserinfo(prev =>{
      return {...prev, [name]: val }
    })
  }

  return (
    <section className="container">
      <div className="box">
        <div className="form">
          <h1>MYO Website </h1>
          <h2>Login</h2>
          <form onSubmit = {HandleSubmit}>
            <div className="inputBx">
              <input type="text" placeholder="Email" name ="email" value={userinfo.email} onChange={ChangeHandler}/>
              <AccountCircleIcon className="icons" />
            </div>

            <div className="inputBx">
              <input type="password" placeholder="Password" name = "password" value = {userinfo.password} onChange={ChangeHandler}/>
              <LockIcon className="icons" />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: 'white', paddingBlock: 15 }}
                  
                  onChange={CheckboxHandler}
                  checked={userinfo.remember}
                  name = "remember"
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
