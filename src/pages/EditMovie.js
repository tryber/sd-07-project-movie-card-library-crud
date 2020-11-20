import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      movie: '',
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const passTo = this.props.match.params;
    const id = passTo.id;
    this.update(id);
  }

  async update(id) {
    const movies = await movieAPI.getMovie(id);
    this.setState({ movie: movies, status: '' });
  }

  async handleSubmit(updatedMovie) {
    const movieUpdated = await movieAPI.updateMovie(updatedMovie);
    this.setState({ movie: movieUpdated, shouldRedirect: true });
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
  match: PropTypes.element.isRequired,
};

export default EditMovie;
