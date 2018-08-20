
import React, { Component } from 'react';
import classNames from 'classnames';
import Logo from '../../img/whinepad.jpg'

export default class Whinepad extends Component {

  render() {

    return (
      <div className="projects-container">
      <div className="card-container">
        <div className="card-body">
          <div className="card-side side-front">
            <div className="container-fluid">
              <img className="card-front-img" src={Logo}/>
              <div className="side-front-content">
                <h3>Whinepad</h3>
              </div>
            </div>
          </div>
          <div className="card-side side-back">
            <div className="container-fluid">
              <h3 className="card-title">Whinepad</h3>
              <p className="card-text">Aplikacja zbudowana na podstawie książki Stoyan&nbsp;Stefanov&nbsp;-&nbsp;React w działaniu </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">JSX</li>
                <li className="list-group-item">Flux</li>
              </ul>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
