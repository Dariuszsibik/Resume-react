import { translate, Trans } from 'react-i18next';
import React, { Component } from 'react';

class Courses extends Component {
  render() {
    const { t, i18n } = this.props;
    const language = t("language");

    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="courses">
        <div className="my-auto">
        <h2 className="mb-5 courses-title">{t("courses-certificates")}</h2>
        <ul className="fa-ul mb-0">
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("strefakursow_nodejs")}
            </li>
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("strefakursow_git")}
            </li>
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("strefakursow_webpack")}
            </li>
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("strefakursow_html")}
            </li>
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("strefakursow_ekosystemjs")}
            </li>
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("strefakursow_android")}
            </li>
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("eitca_database")}
            </li>
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("sages")}
            </li>
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("artax")}
            </li>
            <li className="courses-name">
                    <i className="fa-li fa fa-trophy text-warning"></i> {t("ericpol")}
            </li>
        </ul>
    </div>
  </section>
    );
  }
}

export default translate('translations')(Courses);