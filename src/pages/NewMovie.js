import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    const createMovie = await movieAPI.createMovie(newMovie);
    if (createMovie === 'OK') this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
