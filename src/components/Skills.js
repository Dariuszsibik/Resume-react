
import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    return (

              <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
              <div className="my-auto">
                  <div className="subheading mb-3">Z czego korzystam:</div>
                  <ul className="list-inline list-icons">
                        <li className="list-inline-item">
                            <i class="devicon devicon-html5-plain-wordmark colored" title="Test"></i>
                        </li>
                        <li className="list-inline-item">
                            <i class="devicon devicon-css3-plain-wordmark colored"></i>
                        </li>
                        <li className="list-inline-item">
                            <i class="devicon devicon-javascript-plain colored"></i>
                        </li>
                        <li className="list-inline-item">
                            <i class="devicon devicon-jquery-plain-wordmark colored"></i>
                        </li>
                        <li className="list-inline-item">
                            <i class="devicon devicon-bootstrap-plain-wordmark colored"></i>
                        </li>
                        <li className="list-inline-item">
                            <i class="devicon devicon-react-original-wordmark colored"></i>
                        </li>
                        <li className="list-inline-item">
                            <i class="devicon devicon-java-plain-wordmark colored"></i>
                        </li>

                  </ul>

                  <div className="subheading mb-3">Narzędzia:</div>
                  <ul className="list-inline list-icons">
                      <li className="list-inline-item">
                            <i class="devicon devicon-wordpress-plain-wordmark colored"></i>
                      </li>
                      <li className="list-inline-item">
                            <i class="devicon devicon-visualstudio-plain-wordmark colored"></i>
                      </li>
                      <li className="list-inline-item">
                            <i class="devicon devicon-intellij-plain-wordmark colored"></i>
                      </li>
                      <li className="list-inline-item">
                            <i class="devicon devicon-git-plain-wordmark colored"></i>
                      </li>
                  </ul>

                  <div className="subheading mb-3">W czym się rozwijam:</div>
                  <ul className="list-inline list-icons">
                        <li className="list-inline-item">
                                <i class="devicon devicon-react-original-wordmark colored"></i>   
                        </li>
                        <li className="list-inline-item">
                                <i class="devicon devicon-angularjs-plain-wordmark"></i> 
                        </li>
                        <li className="list-inline-item">
                                <i class="devicon devicon-nodejs-plain-wordmark colored"></i>     
                        </li>
                        <li className="list-inline-item">
                                <i class="devicon devicon-typescript-plain colored"></i>    
                        </li>
                        <li className="list-inline-item">
                                <i class="devicon devicon-webpack-plain-wordmark colored"></i>    
                        </li>


                  </ul>
              </div>
          </section>
        
    );
  }
}