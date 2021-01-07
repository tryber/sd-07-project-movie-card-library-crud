import React, { Component } from 'react';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then((movie) => this.setState(movie))
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewMovie;
