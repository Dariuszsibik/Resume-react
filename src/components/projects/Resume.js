
import React, { Component } from 'react';
import Logo from '../../img/resume.jpg'
import { translate } from 'react-i18next';

class Resume extends Component {

  render() {
    const { t } = this.props;

    return (
              <div className="projects-container">
                <div className="card-container">
                  <div className="card-body">
                    <div className="card-side side-front">
                      <div className="container-fluid">
                        <img className="card-front-img" src={Logo} alt={t("projects-dariuszsibik")} />
                        <div className="side-front-content">
                          <h3>{t("projects-dariuszsibik")}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-side side-back">
                      <div className="container-fluid">
                        <h3 className="card-title">{t("projects-dariuszsibik")}</h3>
                        <p className="card-text">{t("projects-dariuszsibik-text")}</p>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">React</li>
                          <li className="list-group-item">JSX</li>
                          <li className="list-group-item">Bootstrap</li>
                        </ul>
                        <a href="https://github.com/Dariuszsibik/Resume-react" className="btn btn-primary">{t("view-code")}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}
export default translate('translations')(Resume);