import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      criando: true
    }
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({ criando: false });
  }

  render() {
    return (
      this.state.criando ?
        <div data-testid="new-movie">
          <MovieForm onSubmit={this.handleSubmit} />
      </div> : <Redirect to="/" />
    );
  }
}
export default NewMovie;
