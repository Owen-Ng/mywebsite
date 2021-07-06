import './App.css';
import { Route, Switch, BrowserRouter,useLocation } from 'react-router-dom';
import Contacts from './pages/Contacts';
import About from './pages/About';
import WorkExperiences from './pages/WorkExperiences';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Register from './pages/Register'
import "./pageTransitions/slideTransition.css";
import {AnimatePresence, motion} from "framer-motion";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import React from 'react';
function App(props) {
  const location = useLocation();
  const pageTransitions = {
    in:{
      x: 0 
      ,
      scale: 1
    }, 
    out:{
      x: "100vw", // this will animate it from 100 to 0 because in is 0
      scale: 0.8
    },
    exit:{
      x:"100vw" // from o to 100
    }
  }

  const homeTransitions = {
    in:{
      x: 0
    }, 
    out:{
      x: "-100vw"
    },
    exit:{
      x:"-100vw"
    }
  }
  return (
    
   <div className="App"> 
      <AnimatePresence exitBeforeEnter >
        <Switch location={location} key={location.pathname}>
        <Route path="/">
    <Home pageTransitions={homeTransitions}/>

          </Route>
    <Route path="/workexperiences">
    
            <WorkExperiences pageTransitions={pageTransitions}/>
          </Route>
          <Route path="/home">
            <Home pageTransitions={homeTransitions}/>
          </Route>

          <Route path="/projects">
            <Projects pageTransitions={pageTransitions}/>
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="/about">
            <About pageTransitions={pageTransitions}/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        </AnimatePresence>
        </div>
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
