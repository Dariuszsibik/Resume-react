
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Logo from '../../img/onlineshop.jpg'

class OnlineShop extends Component {

  render() {
  const { t } = this.props;

    return (
      <div className="projects-container">
      <div className="card-container">
      <h3 className="card-title-front">Online shop</h3>
        <div className="card-body">
          <div className="card-side side-front">
            <div className="container-fluid">
              <img className="card-front-img" src={Logo} alt="Online Shop" />
            </div>
          </div>
          <div className="card-side side-back">
            <div className="container-fluid">
              <p className="card-text">{t("projects-onlineshop-text")}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React-Router</li>
                <li className="list-group-item">SCSS</li>
                <li className="list-group-item">Bootstrap</li>
              </ul>
              <a href="https://dariuszsibik.github.io/react-scss-bootstrap/#/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t("view-website")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default translate('translations')(OnlineShop);