
import React, { Component } from 'react';
import Whinepad from './projects/Whinepad.js';
import Resume from './projects/Resume.js';
import Mcuprys from './projects/Mcuprys.js';
import TicTacToe from './projects/TicTacToe.js';
import Calc from './projects/Calc.js';

export default class Projects extends Component {

  render() {
    return (

<section>
                <Whinepad/>
                <Resume/>
                <TicTacToe/>
                <Mcuprys/>
                <Calc/>
</section>
    );
  }
}