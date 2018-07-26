import React, { Component } from 'react';
import classNames from 'classnames';
import { translate, Trans } from 'react-i18next';
import ChangeLanguage from './ChangeLanguage.js';

    class Nav extends Component {
    constructor(){
        super();
        this.state = {
        show: false,
     };
    }
    

    onToggleClick(event) {
        event.preventDefault();

        this.setState({
            show: !this.state.show
        });
    }

  render() {
    const { t, i18n } = this.props;
    const language = t("language");

    const toggleclassName = classNames({
        'show': this.state.show === true,
    })
    const hideclassName = classNames({
        'hide': this.state.show === false,
    })
    const aboutClassName = classNames({
        'active': this.props.navActive === 'about',
    })
    const educationClassName = classNames({
        'active': this.props.navActive === 'education',
    })
    const experienceClassName = classNames({
        'active': this.props.navActive === 'experience',
    })
    const skillsClassName = classNames({
        'active': this.props.navActive === 'skills',
    })
    const awardsClassName = classNames({
        'active': this.props.navActive === 'awards',
    })
    const interestsClassName = classNames({
        'active': this.props.navActive === 'interests',
    })

    return (
                <nav className="nav nav-pills nav-fill navbar-expand-lg navbar-dark">
                    <button className="navbar-toggler collapsed mr-auto" type="button" onClick={this.onToggleClick.bind(this)} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ChangeLanguage class={'languageMin'}/>
                        <div id="onToggle" className={`navbar-collapse ${toggleclassName} ${hideclassName}`} >
                            <li className="nav-item">
                                <a className={`nav-link ${aboutClassName}`} id="nav-item-link" onClick={ () => this.props.onNavClick('about') } href="#about">{t("about")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${experienceClassName}`} id="nav-item-link" value="2"  onClick={ () => this.props.onNavClick('experience') } href="#experience">{t("experience")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${educationClassName}`} id="nav-item-link" onClick={ () => this.props.onNavClick('education') } href="#education">{t("education")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${skillsClassName}`} id="nav-item-link" onClick={ () => this.props.onNavClick('skills') } href="#skills">{t("skills")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${interestsClassName}`} id="nav-item-link" onClick={ () => this.props.onNavClick('interests') } href="#interests">{t("interests")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${awardsClassName}`} id="nav-item-link" onClick={ () => this.props.onNavClick('awards') } href="#awards">{t("awards")}</a>
                            </li>
                            </div>
                            <ChangeLanguage/>
                        </nav>
    );
  }
}

export default translate('translations')(Nav);