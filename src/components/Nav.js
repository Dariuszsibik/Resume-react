import React, { Component } from 'react';
import classNames from 'classnames';
import { translate, Trans } from 'react-i18next';
import ChangeLanguage from './ChangeLanguage.js';

    class Nav extends Component {
    constructor(){
        super();
        this.state = {toggleOn: false };
    }

    onToggleClick(event) {
        event.preventDefault();

        this.setState({
            toggleOn: !this.state.toggleOn
        });
    }

  render() {
    const { t, i18n } = this.props;
    const language = t("language");

    const toggleclassName = classNames({
        'show': this.state.toggleOn === true,
    })
    const aboutClassName = classNames({
        'active': this.props.about === true,
    })
    const educationClassName = classNames({
        'active': this.props.education === true,
    })
    const experienceClassName = classNames({
        'active': this.props.experience === true,
    })
    const skillsClassName = classNames({
        'active': this.props.skills === true,
    })
    const awardsClassName = classNames({
        'active': this.props.awards === true,
    })
    const interestsClassName = classNames({
        'active': this.props.interests === true,
    })

    return (
                <nav className="nav nav-pills nav-fill navbar-expand-lg navbar-dark">
                    <button className="navbar-toggler collapsed mr-auto" type="button" onClick={this.onToggleClick.bind(this)} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ChangeLanguage class={'languageMin'}/>
                        <div className={`collapse navbar-collapse ${toggleclassName}`} >
                            <li className="nav-item">
                                <a className={`nav-link ${aboutClassName}`} id="nav-item-link" onClick={this.props.onAboutClick} href="#about">{t("about")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${experienceClassName}`} id="nav-item-link" value="2"  onClick={this.props.onExperienceClick} href="#experience">{t("experience")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${educationClassName}`} id="nav-item-link" onClick={this.props.onEducationClick} href="#education">{t("education")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${skillsClassName}`} id="nav-item-link" onClick={this.props.onSkillsClick} href="#skills">{t("skills")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${interestsClassName}`} id="nav-item-link" onClick={this.props.onInterestsClick} href="#interests">{t("interests")}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${awardsClassName}`} id="nav-item-link" onClick={this.props.onAwardsClick} href="#awards">{t("awards")}</a>
                            </li>
                            </div>
                            <ChangeLanguage/>
                        </nav>
    );
  }
}

export default translate('translations')(Nav);