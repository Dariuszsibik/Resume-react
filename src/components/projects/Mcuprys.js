
import React, { Component } from 'react';
import Logo from '../../img/mcuprys.jpg'
import { translate } from 'react-i18next';

class Mcuprys extends Component {

  render() {
    const { t } = this.props;

    return (
              <div className="projects-container">
                <div className="card-container">
                <h3 className="card-title-front">{t("projects-mcuprys-title")}</h3>
                  <div className="card-body">
                    <div className="card-side side-front">
                      <div className="container-fluid">
                        <img className="card-front-img" src={Logo} alt={t("projects-mcuprys-title")} />
                      </div>
                    </div>
                    <div className="card-side side-back">
                      <div className="container-fluid">
                        <p className="card-text">{t("projects-mcuprys-text")} </p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Wordpress</li>
                          <li className="list-group-item">Javascript</li>
                          <li className="list-group-item">PHP</li>
                        </ul>
                        <a href="http://magdalenacuprys.pl/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t("view-website")}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}
export default translate('translations')(Mcuprys);