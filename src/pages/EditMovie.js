import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieEdit();
  }

  async fetchMovieEdit() {
    const idMovieEdit = this.props.match.params.id;
    const dataMovieEdit = await movieAPI.getMovie(idMovieEdit);
    this.setState({ status: '', movie: dataMovieEdit });
  }

  async handleSubmit(updatedMovie) {
    const reqUpdatedMovie = await movieAPI.updateMovie(updatedMovie);
    if (reqUpdatedMovie === 'OK') {
      this.setState({ shouldRedirect: true });
    }
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      // render Loading
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
