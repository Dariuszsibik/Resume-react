import React, { Component } from 'react';
import {
  BrowserRouter as Router,
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
import PageNotFound from './components/PageNotFound.js';


class App extends Component {

  render() {

    return (
        <Router>
            <div className="Resume">
                <Nav/>
                <SideBar/>
                    <div className="container-fluid p-0">
                          <Route exact path="/" component={About} />
                          <Route path="/about" component={About} />
                          <Route path="/experience" component={Experience} />
                          <Route path="/education" component={Education} />
                          <Route path="/skills" component={Skills} />
                          <Route path="/projects" component={Projects} />
                          <Route path="/courses" component={Courses} />
                    </div>
            </div>
        </Router>
    );
  }
}

export default App