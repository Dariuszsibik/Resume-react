
import React, { Component } from 'react';
import Project from './projects/Project';
import { translate } from 'react-i18next';

const API_URL = `${
  process.env.PUBLIC_URL
}/api/projects.json`;

class Projects extends Component {
  constructor() {
      super();
      this.state = {
          dataProjects: [],
          loading: true,
          error: false,
      };
  }

  componentDidMount() {
      fetch(API_URL)
          .then(res => res.json())
          .then(json => {
              this.setState({ dataProjects: json.results, loading: false });
          })
          .catch(error => {
              this.setState({ error });
          });
  }

  render() {
      const { t } = this.props;
      let projects = [];
      projects = this.state.dataProjects.map((el, i) =>
          <Project
              key={i}
              id={el.id}
              name={t(el.name)}
              img={el.img}
              description={t(el.description)}
              item={el.item}
              url={el.url}
              button={t(el.button)}
          />
      );

          return(
            <React.Fragment>
               {projects}
            </React.Fragment>
          )
  }
}
export default translate('translations')(Projects);