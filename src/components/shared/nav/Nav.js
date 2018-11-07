import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ChangeLanguage from '../changeLanguage/ChangeLanguage.js';

import {NavLink } from 'react-router-dom';

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
                                <NavLink   to="/about" activeClassName="active"  className="nav-link" id="nav-item-link">{t("about")}</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink   to="/experience" className="nav-link" id="nav-item-link">{t("experience")}</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink   to="/education" className="nav-link" id="nav-item-link">{t("education")}</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink   to="/skills" className="nav-link" id="nav-item-link">{t("skills")}</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink   to="/projects" className="nav-link" id="nav-item-link">{t("projects")}</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink   to="/courses" className="nav-link" id="nav-item-link">{t("courses")}</NavLink >
                            </li>
                            </div>
                            <ChangeLanguage/>
                        </nav>
    );
  }
}

export default translate('translations')(Nav);