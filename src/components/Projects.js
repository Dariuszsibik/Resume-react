
import React, { Component } from 'react';
import classNames from 'classnames';

export default class Projects extends Component {
      constructor(){
        super();
        this.state = {
        one: false,
        two: false,
        three: false,
        four: false,
    };
    }
    onMouseOut(number, event) {

      switch (number) {
        case 'one':
                this.setState({
                  one: false
              });
            break;
        case 'two':
              this.setState({
                two: false
            });
            break;
        case 'three':
              this.setState({
                three: false
            });
            break;
    case 'four':
              this.setState({
                four: false
            });
              break;
      }
    }

    onMouseOn(number, event) {

      switch (number) {
        case 'one':
                this.setState({
                  one: true
              });
            break;
        case 'two':
            this.setState({
              two: true
          });
          break;
        case 'three':
            this.setState({
              three: true
          });
          break;
    case 'four':
          this.setState({
            four: true
        });
          break;
      }
    }

  render() {

    const classOne = classNames({
      'flipped': this.state.one === true,
     })
    const classTwo = classNames({
      'flipped': this.state.two === true,
    })
    const classThree = classNames({
      'flipped': this.state.three === true,
    })
    const classFour = classNames({
      'flipped': this.state.four === true,
    })

    return (
  
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
      <div class="container">
      <div class="row">
      <div class="col">
            <div class="flip">
              <div class={`card ${classOne}`} onMouseOver={this.onMouseOn.bind(this, 'one')} onMouseOut={this.onMouseOut.bind(this, 'one')} > 
                <div class="face front"> 
                  <div class="inner">   
                    <img src="https://images.pexels.com/photos/1023756/pexels-photo-1023756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                  </div>
                </div> 
                <div class="face back"> 
                  <div class="inner text-center"> 
                    <h3>Improved efficiency through automation</h3>
                    <button type="button" class="btn btn-default">Know More</button>
                  </div>
                </div>
              </div>	 
            </div>
          </div>
        <div class="col">
            <div class="flip">
            <div class={`card ${classTwo}`} onMouseOver={this.onMouseOn.bind(this, 'two')} onMouseOut={this.onMouseOut.bind(this, 'two')} >                 <div class="face front"> 
                  <div class="inner">   
                    <img src="https://images.pexels.com/photos/1023756/pexels-photo-1023756.jpeg?auto=compress&cs=tinysrgb&h=650&w=col940" />
                  </div>
                </div> 
                <div class="face back"> 
                  <div class="inner text-center"> 
                    <h3>Improved efficiency through automation</h3>
                    <button type="button" class="btn btn-default">Know More</button>
                  </div>
                </div>
              </div>	 
            </div>
          </div>
         </div>
        <div class="row"> 
        <div class="col">
            <div class="flip">
            <div class={`card ${classThree}`} onMouseOver={this.onMouseOn.bind(this, 'three')} onMouseOut={this.onMouseOut.bind(this, 'three')} > 
                <div class="face front"> 
                  <div class="inner">   
                    <img src="https://images.pexels.com/photos/1023756/pexels-photo-1023756.jpeg?auto=compress&cs=tinysrgb&h=650&w=col940" />
                  </div>
                </div> 
                <div class="face back"> 
                  <div class="inner text-center"> 
                    <h3>Improved efficiency through automation</h3>
                    <button type="button" class="btn btn-default">Know More</button>
                  </div>
                </div>
              </div>	 
            </div>
          </div>
        <div class="col">
            <div class="flip">
            <div class={`card ${classFour}`} onMouseOver={this.onMouseOn.bind(this, 'four')} onMouseOut={this.onMouseOut.bind(this, 'four')} >  
                <div class="face front"> 
                  <div class="inner">   
                    <img src="https://images.pexels.com/photos/1023756/pexels-photo-1023756.jpeg?auto=compress&cs=tinysrgb&h=650&w=col940" />
                  </div>
                </div> 
                <div class="face back"> 
                  <div class="inner text-center"> 
                    <h3>Improved efficiency through automation</h3>
                    <button type="button" class="btn btn-default">Know More</button>
                  </div>
                </div>
              </div>	 
            </div>
          </div>
        </div>
        </div>
    </section>
    );
  }
}