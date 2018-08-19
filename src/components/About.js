
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
    const isMobile = this.state.resolution <= 991;
  
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
            <span className="text-resume">Sibik</span>
          </h1>
          <div className="about-list subheading mb-5">
              <div className="about-list-item"><span className="about-list-item-span">Miejscowość: </span>Kraków </div>
              <div className="about-list-item"> <span className="about-list-item-span">Telefon: </span>883 739 377 </div>
              <div className="about-list-item"> <span className="about-list-item-span">Email: </span><a href="sibikdariusz@gmail.com"> sibikdariusz@gmail.com</a> </div>
          </div>
          <p className="lead mb-5">tekst o mnie</p>
          <div className="about-icons">
          <a href="#" className="about-icon-linedin">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#" className="about-icon-github">
              <i className="fa fa-github"></i>
            </a>
            <a href="#" className="about-icon-facebook">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </section>
  );
}

function DesktopView() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="about">
        <div className="my-auto">
          <h1 className="about-title mb-0">Dariusz
            <span className="text-resume">Sibik</span>
          </h1>
          <div className="about-list subheading mb-5">
              <div className="about-list-item"><span className="about-list-item-span">Miejscowość: </span>Kraków </div>
              <div className="about-list-item"> <span className="about-list-item-span">Telefon: </span>883 739 377 </div>
              <div className="about-list-item"> <span className="about-list-item-span">Email: </span><a href="sibikdariusz@gmail.com"> sibikdariusz@gmail.com</a> </div>
          </div>
              <p className="lead">tekst o mnie</p>
        </div>

      </section>


  );
}