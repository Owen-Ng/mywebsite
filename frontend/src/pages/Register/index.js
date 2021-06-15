import { Container } from '@material-ui/core';
import './index.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useState} from "react";
import { Link, useHistory } from 'react-router-dom';

export default function Register() {
  const history = useHistory();
  const [userinfo, setuserinfo] = useState({email:"", password: "", passwordcheck:""});

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


  return (
    <section className="container">
      <div className="box">
        <div className="form">
          <h1>MYO Website </h1>
          <h2>Register</h2>
          <form onSubmit = {HandleSubmit}>
            <div className="inputBx">
              <input type="text" placeholder="Email" name ="email" value={userinfo.email} onChange={ChangeHandler}/>
              <AccountCircleIcon className="icons" />
            </div>

            <div className="inputBx">
              <input type="password" placeholder="Password" name = "password" value = {userinfo.password} onChange={ChangeHandler}/>
              <LockIcon className="icons" />
            </div>

            <div className="inputBx">
              <input type="password" placeholder="Re-enter Password" name = "passwordcheck" value = {userinfo.passwordcheck} onChange={ChangeHandler}/>
              <LockIcon className="icons" />
            </div>

            <div className="inputBx">
              <input type="submit" value="Register" />
             
            </div>
            <div className="inputBx">
            <button id="back" onClick={()=> history.goBack()}>Back to Login Page</button>
            </div>
          </form>
          
        </div>
      </div>
    </section>
  );
}
