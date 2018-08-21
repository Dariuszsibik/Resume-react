
import React, { Component } from 'react';
import classNames from 'classnames';
import Logo from '../../img/tic-tac-toe.jpg'

export default class TicTacToe extends Component {

  render() {

    return (
      <div className="projects-container">
      <div className="card-container">
        <div className="card-body">
          <div className="card-side side-front">
            <div className="container-fluid">
              <img className="card-front-img" src={Logo}/>
              <div className="side-front-content">
                <h3>Tic Tac Toe</h3>
              </div>
            </div>
          </div>
          <div className="card-side side-back">
            <div className="container-fluid">
              <h3 className="card-title">Tic Tac Toe</h3>
              <p className="card-text">Aplikacja do gry w kółko krzyżyk. Użytkownik ma możliwość wyboru rozgrywki z AI. Rozbudowany tutorial ze strony reactjs.org.</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">JSX</li>
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
