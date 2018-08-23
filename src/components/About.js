import { translate } from 'react-i18next';
import React, { Component } from 'react';

class About extends Component {

  render() {
    const { t } = this.props;

    return (

      <section className="resume-section p-3 p-lg-5 d-flex d-column">
      <div className="my-auto">
        <h1 className="mb-0 about-title"><span className="about-letter">D</span>ariusz
          <span className="about-title-item"><span className="about-letter">S</span>ibik</span>
        </h1>
        <div className="about-list subheading">
            <div className="about-list-item"><span className="about-list-item-span">{t("about-city")} </span>Kraków </div>
            <div className="about-list-item"> <span className="about-list-item-span">{t("about-tel")} </span>883 739 377 </div>
            <div className="about-list-item"> <span className="about-list-item-span">Email: </span><a href="sibikdariusz@gmail.com" className="about-email"> sibikdariusz@gmail.com</a> </div>
        </div>
        <p className="about-me lead mb-5">{t("about-me")} <br /> {t("about-free-time")}</p>
        <div className="about-icons">
        <a href="https://www.linkedin.com/in/dariusz-sibik-a14349104/" target="_blank" rel="noopener noreferrer" className="about-icon-linedin">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/Dariuszsibik" target="_blank" rel="noopener noreferrer" className="about-icon-github">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="about-icon-facebook">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
      </div>
    </section>
        
    );
  }
}

export default translate('translations')(About);