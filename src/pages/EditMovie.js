import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      status: '',
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestMovie = this.requestMovie.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  requestMovie() {
    const { id } = this.props.match.params;
    this.setState({ status: 'loading' }, async () => {
      const requestMovie = await movieAPI.getMovie(id);
      this.setState({
        status: '',
        movie: requestMovie,
      });
    });
  }

  handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' }, async () => {
      const requestUpdate = await movieAPI.updateMovie(updatedMovie);
      this.setState({
        status: requestUpdate,
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
