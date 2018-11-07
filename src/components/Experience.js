import React, { Component } from 'react';
import { translate } from 'react-i18next';

class Experience extends Component {
  render() {
    const { t } = this.props;

    return (

      <section className="resume-section p-3 p-lg-5 d-flex flex-column">
      <div className="my-auto">
          <div className="resume-item">
              <div className="resume-content mr-auto text-center">
                  <h3 className="experience-title mb-0">{t('experience_position')}</h3>
                  <span className="experience-data">{t('experience_uj_date')}</span>
                  <div className="experience-title">{t('experience_uj')}</div>
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
                    <h2 className="experience-projects-title">{t('experience_sample_projects')}</h2>
                        <ul className="fa-ul mb-0 experience-projects-item">
                            <li className="experience-items">
                                <a href="https://login.uj.edu.pl/login" target="_blank" rel="noopener noreferrer"><i className="fa-li fa fa-code"></i>{t('experience_projects_centrallogin')}</a></li>
                                <li className="experience-items">
                                <a href="http://www.wbbib.uj.edu.pl" target="_blank" rel="noopener noreferrer"><i className="fa-li fa fa-code"></i>{t('experience_projects_wbbib')}</a></li>
                                <li className="experience-items">
                                <a href="http://www.wb.uj.edu.pl" target="_blank" rel="noopener noreferrer"><i className="fa-li fa fa-code"></i>{t('experience_projects_wb')}</a></li>
                                <li className="experience-items">
                                <a href="http://www.phils.uj.edu.pl" target="_blank" rel="noopener noreferrer"><i className="fa-li fa fa-code"></i>{t('experience_projects_fil')}</a></li>
                                <li className="experience-items">
                                <a href="http://www.chemia.uj.edu.pl" target="_blank" rel="noopener noreferrer"><i className="fa-li fa fa-code"></i>{t('experience_projects_chemii')}</a></li>
                                <li className="experience-items">
                                <a href="http://www.ibhp.uj.edu.pl" target="_blank" rel="noopener noreferrer"><i className="fa-li fa fa-code"></i>{t('experience_projects_bhp')}</a></li>
                        </ul>
                </div>

      </div>

  </section>

    );
  }
}

export default translate('translations')(Experience);
