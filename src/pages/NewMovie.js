import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { redirect: 'no' };
  }

  handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    createMovie(newMovie).then(
      this.setState({
        redirect: 'yes',
      }),
    );
  }

  render() {
    const { redirect } = this.state;
    if (redirect === 'yes') {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div data-testid="new-movie">
          <MovieForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default NewMovie;
