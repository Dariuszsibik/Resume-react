
import React, { Component } from 'react';
import { translate } from 'react-i18next';

class Skills extends Component {
  render() {
    const { t } = this.props;

    return (

        <section className="resume-section p-3 p-lg-5 d-flex flex-column">

        <ul className="icon-container">
        <div className="container-text mb-3 skills-text">{t("skills_use")}:</div>
          <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-html5-plain colored"></i>
                <h3 className="icon-h3-title ">html5</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-css3-plain colored"></i>
                <h3 className="icon-h3-title ">css3</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-bootstrap-plain colored"></i>
                <h3 className="icon-h3-title ">bootstrap</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-javascript-plain colored"></i>
                <h3 className="icon-h3-title ">javascript</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-jquery-plain colored"></i>
                <h3 className="icon-h3-title ">jquery</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-react-original"></i>
                <h3 className="icon-h3-title ">react</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-java-plain colored"></i>
                <h3 className="icon-h3-title ">java</h3>
              </span>
            </li>
          </ul>


          <ul className="icon-container">
            <div className="container-text mb-3 skills-text">{t("skills_tools")}:</div>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-git-plain colored"></i>
                <h3 className="icon-h3-title ">git</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-visualstudio-plain colored"></i>
                <h3 className="icon-h3-title ">visualstudio</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-intellij-plain colored"></i>
                <h3 className="icon-h3-title ">intellij</h3>
              </span>
            </li>
          </ul>

          <ul className="icon-container">
            <div className="container-text mb-3 skills-text">{t("skills_develop")}:</div>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-nodejs-plain colored"></i>
                <h3 className="icon-h3-title ">nodejs</h3>
              </span>
            </li>

            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-typescript-plain colored"></i>
                <h3 className="icon-h3-title ">typescript</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-webpack-plain colored"></i>
                <h3 className="icon-h3-title ">webpack</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-react-plain colored"></i>
                <h3 className="icon-h3-title ">react</h3>
              </span>
            </li>
            <li  className="icon-single-container">
              <span  >
                <i className="icon-i-image devicon-babel-plain colored"></i>
                <h3 className="icon-h3-title ">babel</h3>
              </span>
            </li>

          </ul>
    </section>
        
    );
  }
}

export default translate('translations')(Skills);
