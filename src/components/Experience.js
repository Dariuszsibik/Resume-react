
import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
      <div className="my-auto">
          <h2 className="experience-title mb-2.5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                  <h3 className="mb-0">Web Developer</h3>
                  <div className="subheading mb-3">Jagiellonian University in Kraków</div>
                  <p>• Administration of Application Liferay 6.2.5 • Creation pages in Liferay based on structures and templates • Creation  templates for Velocity Web Pages • Participation in the project of the new login system (technologies used: Javascript, Jquery, HTML, CSS) • Participation in the project for editors: http://www.uj.edu.pl/web/wsw-test/start • Participation in the creation of a website for the Public Procurement Department • Participation in the creation and updating of JS scripts and validation of the login form 
 
 Pages preapered during Internship 1) Erasmus  DWM – http://www.erasmus.dwm.uj.edu.pl/ 2) Ingarden Conference –  http://www.ingarden.confer.uj.edu.pl/ 3) Blog of the Jagiellonian Library -  http://www.blog.bj.uj.edu.pl/ 4) International Exchange Department –  http://www.dwm.uj.edu.pl/  </p>
              </div>
              <div className="resume-date text-md-right">
                  <span className="text-primary">07/2017 - Present</span>
              </div>
          </div>

      </div>

  </section>
        
    );
  }
}