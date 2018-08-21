
import React, { Component } from 'react';
import classNames from 'classnames';
import Whinepad from './projects/Whinepad.js';
import CashClicker from './projects/CashClicker.js';
import Mcuprys from './projects/Mcuprys.js';
import TicTacToe from './projects/TicTacToe.js';

export default class Projects extends Component {

  render() {

    return (

<section className="" id="projects">
                <Whinepad/>
                <CashClicker/>
                <TicTacToe/>
                <Mcuprys/>
</section>
    );
  }
}
