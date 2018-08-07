
import React, { Component } from 'react';
import classNames from 'classnames';
import Whinepad from './projects/Whinepad.js';

export default class Projects extends Component {

  render() {

    return (

<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
    <div class="container">
        <div class="row">
            <div class="col">
                <Whinepad/>
            </div>
            <div class="col">
                <Whinepad/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Whinepad/>
            </div>
            <div class="col">
                <Whinepad/>
            </div>
        </div>
    </div>
</section>
    );
  }
}
