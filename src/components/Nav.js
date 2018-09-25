import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ChangeLanguage from './ChangeLanguage.js';

import {Link} from 'react-router-dom';

    class Nav extends Component {

  render() {
    const { t } = this.props;

    return (
                <nav className="nav nav-pills nav-fill navbar-expand-xl navbar-dark">
                    <button id="navbar-toggler-content" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-id" aria-controls="nav-id" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ChangeLanguage class={'languageMin'}/>
                        <div id="nav-id" className="collapse navbar-collapse" >
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" id="nav-item-link">{t("about")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/experience" className="nav-link" id="nav-item-link">{t("experience")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/education" className="nav-link" id="nav-item-link">{t("education")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/skills" className="nav-link" id="nav-item-link">{t("skills")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/courses" className="nav-link" id="nav-item-link">{t("courses")}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/awards" className="nav-link" id="nav-item-link">{t("awards")}</Link>
                            </li>
                            </div>
                            <ChangeLanguage/>
                        </nav>
    );
  }
}

export default translate('translations')(Nav);