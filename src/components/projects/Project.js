import React from 'react';

const Project = (props) => (

<div className="projects-container">
    <div className="card-container">
        <h3 className="card-title-front">{props.name}</h3>
        <div className="card-body">
              <div className="card-side side-front">
                  <div className="container-fluid">
                        <img className="card-front-img" src={props.img} alt={props.name} />
                  </div>
              </div>
              <div className="card-side side-back">
                  <div className="container-fluid">
                      <p className="card-text">{props.description}</p>
                      <ul className="list-group list-group-flush">
                           {props.item.map((el, i) =>
                                <li key={i} className="list-group-item">{el}</li>
                            )}
                      </ul>
                      <a href={props.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary">
                        {props.button}
                      </a>
                  </div>
              </div>
        </div>
    </div>
</div>

);
export default (Project);