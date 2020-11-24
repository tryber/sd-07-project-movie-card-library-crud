import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
    };
  }

  async handleSubmit(newMovie) {
    const reqNewMovie = await movieAPI.createMovie(newMovie);
    if (reqNewMovie === 'OK') {
      this.setState({ shouldRedirect: true });
    }
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
