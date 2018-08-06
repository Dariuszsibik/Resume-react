import React, { Component } from 'react';
import Nav from './components/Nav.js';
import SideBar from './components/SideBar.js';
import Awards from './components/Awards.js';
import About from './components/About.js';
import Education from './components/Education.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience';


class App extends Component {
  constructor(){
    super();
    this.state = {
      navActive: null,
    };
    this.onNavClick = this.onNavClick.bind(this);
  }

    onNavClick(props) {
      this.setState({
        navActive: props
      })
    }

  render() {
   
    var section = null;
    switch (this.state.navActive) {
      case 'awards':
          section = <Awards/>;
          break;
      case 'about':
          section = <About/>;
          break;
      case 'experience':
          section = <Experience/>;
          break;
      case 'education':
          section = <Education/>;
          break;
      case 'skills':
          section = <Skills/>;
          break;
      case 'Projects':
          section = <Projects/>;
          break;
      default: 
          section = null;
  }

    return (
      <div className="Resume">
          <Nav 
              navActive={this.state.navActive}
              onNavClick={this.onNavClick} 
          />
          <SideBar/>
          <div className="container-fluid p-0">
              {section}
          </div>
      </div>
    );
  }
}

export default App