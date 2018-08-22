
import React, { Component } from 'react';
import classNames from 'classnames';
import Logo from '../../img/resume.jpg'

export default class CashClicker extends Component {

  render() {

    return (
              <div className="projects-container">
                <div className="card-container">
                  <div className="card-body">
                    <div className="card-side side-front">
                      <div className="container-fluid">
                        <img className="card-front-img" src={Logo}/>
                        <div className="side-front-content">
                          <h3>Strona Dariusz Sibik</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-side side-back">
                      <div className="container-fluid">
                        <h3 className="card-title">Portfolio Dariusz Sibik</h3>
                        <p className="card-text">Strona internetowa stworzona w React.js.</p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">React</li>
                          <li className="list-group-item">JSX</li>
                          <li className="list-group-item">Bootstrap</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Zobacz kod źródłowy</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}
