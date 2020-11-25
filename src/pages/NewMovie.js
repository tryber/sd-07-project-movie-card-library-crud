import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState(async () => {
      await movieAPI.createMovie(newMovie);
    });
  }

  render() {
    return (
      <div className="movie-card">
        <div className="movie-card-body" data-testid="new-movie">
          <MovieForm onSubmit={() => this.handleSubmit()} />
        </div>
        <div className="button-background">
          <Link className="button-link" to={'/'}>VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default NewMovie;
