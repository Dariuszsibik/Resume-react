
import React, { Component } from 'react';

export default class SideBar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sidebar">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Start Bootstrap</span>
          <span className="d-none d-lg-block">
        <img className="img-fluid img-profile mx-auto mb-2" src="img/profile.jpg" alt="" />
      </span>
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <div className="sidebar-contact">
                <h4 className="dariusz-sibik"> Dariusz Sibik </h4>
                    <li className="nav-item">
                        <span className="sidebar-mail">
                                <a className="fa fa-envelope fa-stack-1x fa-inverse" href="mailto:sibikdariusz@gmail.com">sibikdariusz@gmail.com</a>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="sidebar-phone">
                                <a className="fa fa-phone fa-stack-1x fa-inverse" href="tel:883-739-377" >883 739 377</a>
                        </span>
                    </li>
              </div>
              <ul className="list-inline list-social-icons mb-0">
                    <li className="list-block-item">
                        <a href="#" className="list-facebook">
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                    <li className="list-block-item">
                        <a href="#" className="list-linkedin">
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                             </span>
                        </a>
                    </li>
                    <li className="list-block-item">
                        <a href="#" className="list-github">
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-circle fa-stack-2x"></i>
                                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </a>
                    </li>
                </ul>
          </ul>
      </div>
  </nav>
        
    );
  }
}