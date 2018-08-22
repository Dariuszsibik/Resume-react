
import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import classNames from 'classnames';
import Logo from '../../img/tic-tac-toe.jpg'

class TicTacToe extends Component {

  render() {
  const { t, i18n } = this.props;
  const language = t("language");

    return (
      <div className="projects-container">
      <div className="card-container">
        <div className="card-body">
          <div className="card-side side-front">
            <div className="container-fluid">
              <img className="card-front-img" src={Logo}/>
              <div className="side-front-content">
                <h3>Tic-Tac-Toe</h3>
              </div>
            </div>
          </div>
          <div className="card-side side-back">
            <div className="container-fluid">
              <h3 className="card-title">Tic-Tac-Toe</h3>
              <p className="card-text">{t("projects-tic-tac-toe")}</p>
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
export default translate('translations')(TicTacToe);