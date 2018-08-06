import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';

class Experience extends Component {
  render() {
    const { t, i18n } = this.props;
    const language = t("language");

    return (

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
      <div className="my-auto">
          <h2 className="experience-title mb-2.5">{t('experience')}</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                  <h3 className="mb-0">{t('experience_position')}</h3>
                  <div className="subheading mb-3">{t('experience_uj')}</div>
                        <ul class="fa-ul mb-0">
                            <li>
                                <i class="fa-li fa fa-check"></i> {t('experience_uj_responsibilities1')} </li>
                            <li>
                                <i class="fa-li fa fa-check"></i> {t('experience_uj_responsibilities2')}</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> {t('experience_uj_responsibilities3')}</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> {t('experience_uj_responsibilities4')}</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> {t('experience_uj_responsibilities5')}</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> {t('experience_uj_responsibilities6')}</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> {t('experience_uj_responsibilities7')}</li>
                        </ul>
              </div>
              <div className="resume-date text-md-right">
                  <span className="text-primary">{t('experience_uj_date')}</span>
              </div>
          </div>

      </div>

  </section>

    );
  }
}

export default translate('translations')(Experience);
