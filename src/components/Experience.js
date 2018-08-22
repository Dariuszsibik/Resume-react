import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';

class Experience extends Component {
  render() {
    const { t, i18n } = this.props;
    const language = t("language");

    return (

      <section className="resume-section p-3 p-lg-5 d-flex flex-column">
      <div className="my-auto">
          <div className="resume-item">
              <div className="resume-content mr-auto text-center">
                  <h3 className="experience-title mb-0">{t('experience_position')}</h3>
                  <span className="experience-data">{t('experience_uj_date')}</span>
                  <div className="experience-title subheading mb-3">{t('experience_uj')}</div>
                        <ul className="fa-ul mb-0">
                            <li className="experience-items">
                                <i className="fa-li fa fa-check-circle"></i> {t('experience_uj_responsibilities1')} </li>
                            <li className="experience-items">
                                <i className="fa-li fa fa-check-circle"></i> {t('experience_uj_responsibilities2')}</li>
                            <li className="experience-items">
                                <i className="fa-li fa fa-check-circle"></i> {t('experience_uj_responsibilities3')}</li>
                            <li className="experience-items">
                                <i className="fa-li fa fa-check-circle"></i> {t('experience_uj_responsibilities4')}</li>
                            <li className="experience-items">
                                <i className="fa-li fa fa-check-circle"></i> {t('experience_uj_responsibilities5')}</li>
                            <li className="experience-items">
                                <i className="fa-li fa fa-check-circle"></i> {t('experience_uj_responsibilities6')}</li>
                            <li className="experience-items">
                                <i className="fa-li fa fa-check-circle"></i> {t('experience_uj_responsibilities7')}</li>
                        </ul>
              </div>
          </div>
                 <div className="experience-projects"> 
                    <h2 className="experience-projects-title">Przykładowe projekty :</h2>
                        <ul className="fa-ul mb-0 experience-projects-item">
                            <li className="experience-items">
                                <a href="https://login.devel.uj.edu.pl/login" target="_blank"><i className="fa-li fa fa-code"></i>Punkt logowania</a></li>
                                <li className="experience-items">
                                <a href="http://www.wbbib.uj.edu.pl" target="_blank"><i className="fa-li fa fa-code"></i>Wydział Biochemii, Biofizyki i Biotechnologii</a></li>
                                <li className="experience-items">
                                <a href="http://www.wb.uj.edu.pl" target="_blank"><i className="fa-li fa fa-code"></i>Wydział Biologii</a></li>
                                <li className="experience-items">
                                <a href="http://www.phils.uj.edu.pl" target="_blank"><i className="fa-li fa fa-code"></i>Wydział Filozoficzny</a></li>
                                <li className="experience-items">
                                <a href="http://www.chemia.uj.edu.pl" target="_blank"><i className="fa-li fa fa-code"></i>Wydział Chemii</a></li>
                                <li className="experience-items">
                                <a href="http://www.ibhp.uj.edu.pl" target="_blank"><i className="fa-li fa fa-code"></i>Inspektorat BHP</a></li>
                        </ul>
                </div>

      </div>

  </section>

    );
  }
}

export default translate('translations')(Experience);
