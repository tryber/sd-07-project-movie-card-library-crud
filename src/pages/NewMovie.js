import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      shouldRedirect: false,
      createMovie: '',
    }
  }

  async handleSubmit(newMovie) {
    const response = await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
      createMovie: response,
    })
  }

  render() {
    const { shouldRedirect } = this.state
    return (
      <div data-testid="new-movie">
        { shouldRedirect ? <Redirect to='/' /> : <MovieForm onSubmit={this.handleSubmit} /> }
      </div>
    );
  }
}
export default NewMovie;
