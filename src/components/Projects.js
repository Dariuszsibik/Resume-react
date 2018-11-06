
import React, { Component } from 'react';
import Project from './projects/Project';
import { translate } from 'react-i18next';
import withHandleError from './shared/hoc/withHandleError';
import withLoading from './shared/hoc/withLoading';
import {compose} from 'recompose';

const API_URL = `${
    process.env.PUBLIC_URL
}/api/projects.json`;

const ProjectsWithHandleErrorAndLoading = compose(
    withHandleError,
    withLoading,
    )(Project);

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
          <ProjectsWithHandleErrorAndLoading
              key={i}
              id={el.id}
              name={t(el.name)}
              img={el.img}
              description={t(el.description)}
              item={el.item}
              url={el.url}
              button={t(el.button)}
              loading={this.state.loading}
              error={this.state.error}
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