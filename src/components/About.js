
import React, { Component } from 'react';

export default class About extends Component {

  constructor() {
    super();
    this.state = {
      resolution: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ resolution: window.innerWidth });
  };
  

  render() {
    const isMobile = this.state.resolution <= 500;
  
    if (isMobile) {
      return (
          <MobileView/>
      );
    } else {
      return (
          <DesktopView/>
      );
    }
    return (

            <h2> About </h2>
        
    );
  }
}

function MobileView() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Dariusz
            <span className="text-primary">Sibik</span>
          </h1>
          <div className="subheading mb-5">Kraków · 883 739 377 · 
            <a href="sibikdariusz@gmail.com"> sibikdariusz@gmail.com</a>
          </div>
          <p className="lead mb-5">tekst o mnie</p>
          <div className="social-icons">
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </section>
  );
}

function DesktopView() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div className="my-auto">
          <h1 className="mb-0">Dariusz
            <span className="text-primary">Sibik</span>
          </h1>
          <div className="subheading mb-5">Kraków · 883 739 377 · 
            <a href="sibikdariusz@gmail.com"> sibikdariusz@gmail.com</a>
          </div>
          <p className="lead mb-5">tekst o mnie</p>
          <div className="social-icons">
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </section>
  );
}