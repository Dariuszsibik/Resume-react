import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav.js';
import SideBar from './components/SideBar.js';
import Courses from './components/Courses.js';
import About from './components/About.js';
import Education from './components/Education.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience';


class App extends Component {

  render() {

    return (
        <Router>
            <div className="Resume">
                <Nav/>
                <SideBar/>
                    <div className="container-fluid p-0">
                    <Switch>
                          <Route exact path={process.env.PUBLIC_URL + '/'} component={About} />
                          <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
                          <Route path={process.env.PUBLIC_URL + '/experience'} component={Experience} />
                          <Route path={process.env.PUBLIC_URL + '/education'} component={Education} />
                          <Route path={process.env.PUBLIC_URL + '/skills'} component={Skills} />
                          <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
                          <Route path={process.env.PUBLIC_URL + '/courses'} component={Courses} />
                    </Switch>
                    </div>
            </div>
        </Router>
    );
  }
}

export default App