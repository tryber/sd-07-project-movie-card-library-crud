import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components/index';

import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetch = this.fetch.bind(this);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: undefined,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const { id } = this.props.match.params;

    this.setState(
      {
        status: 'loading',
      },
      () => {
        movieAPI.getMovie(id).then((response) => {
          this.setState({
            status: '',
            movie: response,
          });
        });
      },
    );
  }

  handleSubmit(updatedMovie) {
    this.setState(
      {
        status: 'loading',
      },
      () => {
        movieAPI.updateMovie(updatedMovie).then((response) => {
          this.setState({
            status: response,
            shouldRedirect: true,
          });
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default EditMovie;
