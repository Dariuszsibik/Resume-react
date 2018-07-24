import React, { Component } from 'react';
import Nav from './components/Nav.js';
import SideBar from './components/SideBar.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
      about: false,
      experience: false,
      education: false,
      skills: false,
      interests: false,
      awards: false 
    };
    this.onAboutClick = this.onAboutClick.bind(this);
    this.onExperienceClick = this.onExperienceClick.bind(this);
    this.onEducationClick = this.onEducationClick.bind(this);
    this.onSkillsClick = this.onSkillsClick.bind(this);
    this.onInterestsClick = this.onInterestsClick.bind(this);
    this.onAwardsClick = this.onAwardsClick.bind(this);
    this.reset = this.reset.bind(this);
  }

    onAboutClick() {
      this.reset();
      this.setState({
          about: true
      });
    }
    onExperienceClick() {
      this.reset();
      this.setState({
          experience: true
      });
    }
    onEducationClick() {
      this.reset();
      this.setState({
          education: true
      });
    }
    onSkillsClick() {
      this.reset();
      this.setState({
          skills: true
      });
    }
    onInterestsClick() {
      this.reset();
      this.setState({
          interests: true
      });
    }
    onAwardsClick() {
      this.reset();
      this.setState({
          awards: true
      });
    }
    reset() {
      this.setState({
        about: false,
        experience: false,
        education: false,
        skills: false,
        interests: false,
        awards: false 
    });
    }


  render() {

    return (
      <div className="Resume">
          <Nav 
              about={this.state.about} 
              experience={this.state.experience} 
              education={this.state.education}
              skills={this.state.skills}
              interests={this.state.interests}
              awards={this.state.awards}
              onAboutClick={this.onAboutClick}
              onExperienceClick={this.onExperienceClick}
              onEducationClick={this.onEducationClick}
              onInterestsClick={this.onInterestsClick}
              onSkillsClick={this.onSkillsClick}
              onAwardsClick={this.onAwardsClick}
          />
          <SideBar/>
          <div className="container-fluid p-0">
          </div>
      </div>
    );
  }
}

export default App