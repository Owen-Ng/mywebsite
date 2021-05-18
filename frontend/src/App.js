import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Contacts from './pages/Contacts';
import About from './pages/About';
import WorkExperiences from './pages/WorkExperiences';
import Home from './pages/Home';
import Projects from './pages/Projects';
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
