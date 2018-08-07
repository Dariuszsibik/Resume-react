
import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';

class Skills extends Component {
  render() {
    const { t, i18n } = this.props;
    const language = t("language");

    return (

        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">

        <ul className="icon-container">
        <div className="container-text mb-3">Z czego korzystam:</div>
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
            <div className="container-text mb-3">Narzędzia:</div>
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
            <div className="container-text mb-3">W czym się rozwijam:</div>
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
