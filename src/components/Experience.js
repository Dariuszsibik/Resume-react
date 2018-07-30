
import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
      <div className="my-auto">
          <h2 className="experience-title mb-2.5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                  <h3 className="mb-0">Web Developer</h3>
                  <div className="subheading mb-3">Jagiellonian University in Kraków</div>
                        <ul class="fa-ul mb-0">
                            <li>
                                <i class="fa-li fa fa-check"></i> Praca nad projektami dla Uniwersytetu Jagiellońskiego, opartymi na platformie Liferay 6.2.5.</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> Frontendu aplikacji: HTML, CSS, Bootstrap, JavaScript, jQuery.</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> Backendu aplikacji: Java, Velocity.</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> Implementacja wymaganych zmian, poprawa bieżących błędów, oraz aktualizacja kodu w zdalnym repozytorium Gitlab.</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> Tworzenie stron w Liferay na podstawie struktur i szablonów.</li>
                            <li>
                                <i class="fa-li fa fa-check"></i> Automatyzacja własnej pracy.</li>
                        </ul>
              </div>
              <div className="resume-date text-md-right">
                  <span className="text-primary">07/2017 - Present</span>
              </div>
          </div>

      </div>

  </section>
        
    );
  }
}