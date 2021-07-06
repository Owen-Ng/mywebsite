import './App.css';
import { Route, Switch, BrowserRouter,useLocation } from 'react-router-dom';
import Contacts from './pages/Contacts';
import About from './pages/About';
import WorkExperiences from './pages/WorkExperiences';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Register from './pages/Register'
import "./pageTransitions/slideTransition.scss";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import React from 'react';
function App(props) {
 

  return (
    <BrowserRouter>
    
    {/* <div className="App"> */}
      
        <Switch >
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <AnimationRoute />
          </Route>
          </Switch>
          
      </BrowserRouter>
  );
}


function AnimationRoute(){
  const location = useLocation();
  
  return(
    <TransitionGroup component="div" className="App">
        <CSSTransition
          key={location.key}
          timeout={400}
          classNames="pageSlider"
         
        >
         
        <Switch location={location}>
    <Route path="/workexperiences">
            <WorkExperiences />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        </CSSTransition>
      </TransitionGroup>

    )

  }
export default App;
