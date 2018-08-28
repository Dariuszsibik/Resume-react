
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Logo from '../../img/calc.jpg'

class Calc extends Component {

  render() {
  const { t } = this.props;

    return (
              <div className="projects-container">
                <div className="card-container">
                <h3 className="card-title-front">{t("projects-calculator")}</h3>
                  <div className="card-body">
                    <div className="card-side side-front">
                      <div className="container-fluid">
                        <img className="card-front-img" src={Logo} alt={t("projects-calculator")} />
                      </div>
                    </div>
                    <div className="card-side side-back">
                      <div className="container-fluid">                      
                        <p className="card-text">{t("projects-calculator-text")}</p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Electron.js</li>
                          <li className="list-group-item">JavaScript</li>
                          <li className="list-group-item">Bootstrap</li>
                        </ul>
                        <a href="https://github.com/Dariuszsibik/Calc-electron-app" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t("view-code")}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}
export default translate('translations')(Calc);
