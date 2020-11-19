import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleFetchMovie = this.handleFetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleFetchMovie();
  }

  async handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
  }

  async handleFetchMovie() {
    const mv = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: mv,
      status: 'loaded',
    });
  }
  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      // Redirect
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
      id: PropTypes.any.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
