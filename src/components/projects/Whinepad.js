
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Logo from '../../img/whinepad.jpg'

class Whinepad extends Component {

  render() {
  const { t } = this.props;

    return (
      <div className="projects-container">
      <div className="card-container">
        <div className="card-body">
          <div className="card-side side-front">
            <div className="container-fluid">
              <img className="card-front-img" src={Logo} alt="Whinepad" />
              <div className="side-front-content">
                <h3 className="card-title-front">Whinepad</h3>
              </div>
            </div>
          </div>
          <div className="card-side side-back">
            <div className="container-fluid">
              <h3 className="card-title">Whinepad</h3>
              <p className="card-text">{t("projects-whinepad-text")}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">JSX</li>
                <li className="list-group-item">Flux</li>
              </ul>
              <a href="https://github.com/Dariuszsibik/whinepad" className="btn btn-primary">{t("view-website")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default translate('translations')(Whinepad);