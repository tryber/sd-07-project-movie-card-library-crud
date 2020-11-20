import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movie: {},
      shouldRedirect: false,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
    this.setState({
      shouldRedirect: true,
    })
  }
  // Na rota /movies/new, utilizando a callback passada para MovieForm, NewMovie deve 
  // criar um novo cartão utilizando a função createMovie do módulo movieAPI. Após o fim 
  // da requisição, NewMovie deve redirecionar o app para a página inicial, contento o 
  // novo cartão.

  render() {
    if (this.state.shouldRedirect) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
