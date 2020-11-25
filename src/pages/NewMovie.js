import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import '../App.css';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      redireciona: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createOneMovie = this.createOneMovie.bind(this);
  }

  async createOneMovie(newMovie) {
    this.setState({ redireciona: true }, async () => {
      await movieAPI.createMovie(newMovie);
    });
  }

  handleSubmit(newMovie) {
    this.createOneMovie(newMovie);
  }

  render() {
    const { redireciona } = this.state;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
        {redireciona ? <Redirect to="/" /> : <Redirect to="/movies/new" /> }
      </div>
    );
  }
}
export default NewMovie;
