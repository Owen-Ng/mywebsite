import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Contacts from './pages/Contacts';
import About from './pages/About';
import WorkExperiences from './pages/WorkExperiences';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Register from './pages/Register'
import {useState, useEffect} from 'react';
function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
