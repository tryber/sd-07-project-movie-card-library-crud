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
    const movieEditId = this.props.match.params.id;
    const requestMovieEdit = await movieAPI.getMovie(movieEditId);
    this.setState({
      status: '',
      movie: requestMovieEdit,
    });
  }

  async handleSubmit(updatedMovie) {
    const requestUpdatedMovie = await movieAPI.updateMovie(updatedMovie);
    if (requestUpdatedMovie === 'OK') {
      this.setState({
        shouldRedirect: true,
      });
    }
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
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
