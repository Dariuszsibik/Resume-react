import React, { Component } from 'react';
import { translate } from 'react-i18next';
import classNames from 'classnames';

class ChangeLanguage extends Component {
    constructor(){
        super();
        this.state = {isEn: true };
    }

    onToggleClick(event) {
        event.preventDefault();

        this.setState({
            isEn: !this.state.toggleOn
        });
    }
 
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    const langClass = classNames(t('language'), "flag");
    const srcFlag = "theme/img/" + t('changeOn') + "-flag.png";
    const languageMin = this.props.class? this.props.class : 'languageMax';

    return (
        <button className={`buttonEn navbar-toggler ml-auto ${languageMin}`} type="button" onClick={() => changeLanguage(t("changeOn"))}>
            <span className="language-text">{t("changeOn")}</span>
            <img className={langClass} src={srcFlag} title={t('changeOn')} alt={t('changeOn')}></img>
        </button>
    );
  }
}

export default translate('translations')(ChangeLanguage);