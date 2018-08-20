
import React, { Component } from 'react';
import classNames from 'classnames';
import Whinepad from './projects/Whinepad.js';
import CashClicker from './projects/CashClicker.js';

export default class Projects extends Component {

  render() {

    return (

<section className="" id="projects">
                <Whinepad/>
                <CashClicker/>
                <Whinepad/>
                <Whinepad/>
</section>
    );
  }
}
