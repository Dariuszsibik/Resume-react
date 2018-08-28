import { translate } from 'react-i18next';
import React, { Component } from 'react';

class Education extends Component {
  render() {
    const { t } = this.props;

    return (

      <section className="resume-section p-3 p-lg-5 d-flex flex-column">
      <div className="my-auto">

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                  <h3 className="education-title">{t("education_university")}</h3>
                  <div className="education-degree">{t("education_university_degree")}</div>
                  <div className="education-content">{t("education_university_specialisation")}</div>
                  <p className="education-content">{t("education_university_diploma")}</p>
              </div>
              <div className="education-date  resume-date text-md-right">
                  <span>{t("education_university_date")}</span>
              </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                  <h3 className="education-title">{t("eitca")}</h3>
                  <div className="education-content">{t("eitca-is")}</div>
              </div>
              <div className="education-date resume-date text-md-right">
                  <span className="text-resume">{t("eitca-date")}</span>
              </div>
          </div>

      </div>
  </section>
        
    );
  }
}

export default translate('translations')(Education);