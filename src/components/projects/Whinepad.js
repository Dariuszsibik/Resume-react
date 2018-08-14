
import React, { Component } from 'react';
import classNames from 'classnames';
import Logo from '../../img/whinepad.jpg'

export default class Whinepad extends Component {

  render() {

    return (
<div>

      <div className="card-container">
        <div className="card-body">

 <div className="card-side side-front">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
              <img class="card-front-img" src={Logo} />
            </div>

            <div className="col-xs-6 side-front-content">
              <h2>Whinepad</h2>
            </div>
          </div>
        </div>
      </div>


       <div className="card-side side-back">

        <div className="container-fluid">
        <h3 class="card-title">Whinepad</h3>
        <p class="card-text">Aplikacja zbudowana na podstawie książki Stoyan&nbsp;Stefanov&nbsp;-&nbsp;React w działaniu </p>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">React</li>
                    <li class="list-group-item">JSX</li>
                    <li class="list-group-item">Flux</li>
                </ul>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
</div>
</div>
    );
  }
}
