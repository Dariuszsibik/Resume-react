
import React, { Component } from 'react';
import Logo from '../../img/mcuprys.jpg'
import { translate } from 'react-i18next';

class Mcuprys extends Component {

  render() {
    const { t } = this.props;

    return (
              <div className="projects-container">
                <div className="card-container">
                  <div className="card-body">
                    <div className="card-side side-front">
                      <div className="container-fluid">
                        <img className="card-front-img" src={Logo} alt={t("projects-mcuprys-title")} />
                        <div className="side-front-content">
                          <h3>{t("projects-mcuprys-title")}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-side side-back">
                      <div className="container-fluid">
                        <h3 className="card-title">{t("projects-mcuprys-title")}</h3>
                        <p className="card-text">{t("projects-mcuprys-text")} </p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Wordpress</li>
                          <li className="list-group-item">Javascript</li>
                          <li className="list-group-item">PHP</li>
                        </ul>
                        <a href="www.magdalenacprys.pl" className="btn btn-primary">{t("view-website")}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}
export default translate('translations')(Mcuprys);