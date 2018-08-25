
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Logo from '../../img/tic-tac-toe.jpg'

class TicTacToe extends Component {

  render() {
  const { t } = this.props;

    return (
      <div className="projects-container">
      <div className="card-container">
      <h3 className="card-title-front">{t("projects-tic-tac-toe-title")}</h3>
        <div className="card-body">
          <div className="card-side side-front">
            <div className="container-fluid">
              <img className="card-front-img" src={Logo} alt={t("projects-tic-tac-toe-title")} />
            </div>
          </div>
          <div className="card-side side-back">
            <div className="container-fluid">
              <p className="card-text">{t("projects-tic-tac-toe")}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">JSX</li>
              </ul>
              <a href="https://github.com/Dariuszsibik/react-tic-tac-toe" className="btn btn-primary">{t("view-code")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default translate('translations')(TicTacToe);