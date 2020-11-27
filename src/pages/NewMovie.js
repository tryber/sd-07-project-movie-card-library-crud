import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI
      .createMovie(newMovie)
      .then((movie) => this.setState({ movie, shouldRedirect: true }));
  }

  render() {
    const { shouldRedirect } = this.state;
    return shouldRedirect ? (
      <Redirect to="/" />
    ) : (
      <div data-testid="new-movie">
        <MovieForm onClick={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
