
import React, { Component } from 'react';

export default class About extends Component {
  
  render() {

    return (

      <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="my-auto">
        <h1 className="mb-0 about-title">Dariusz
          <span className="about-title-item">Sibik</span>
        </h1>
        <div className="about-list subheading">
            <div className="about-list-item"><span className="about-list-item-span">Miejscowość: </span>Kraków </div>
            <div className="about-list-item"> <span className="about-list-item-span">Telefon: </span>883 739 377 </div>
            <div className="about-list-item"> <span className="about-list-item-span">Email: </span><a href="sibikdariusz@gmail.com"> sibikdariusz@gmail.com</a> </div>
        </div>
        <p className="about-me lead mb-5">Specjalizuję się w projektowaniu i budowaniu złożonych aplikacji internetowych. Jestem wielkim fanem języka JavaScript, szczególnie interesuje mnie React.js, node.js. Aktualnie w swojej pracy wykorzystuje biblioteki jQuery, Underscore, YUI. Jestem osobą dobrze zorganizowaną, zmotywowaną, oraz potrafię pracować pod presja czasu. <br /> Prywatnie lubię podróżować, czytać książki branżowe aby doskonalić swoją wiedzę i spędzać czas ze znajomymi </p>
        <div className="about-icons">
        <a href="#" className="about-icon-linedin">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#" className="about-icon-github">
            <i className="fa fa-github"></i>
          </a>
          <a href="#" className="about-icon-facebook">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
      </div>
    </section>
        
    );
  }
}
