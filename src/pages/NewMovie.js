import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,

    };
  }

  handleSubmit(newMovie) {
    const novoFilme = movieAPI.createMovie(newMovie);
    console.log(novoFilme);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    if (redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
        {/* { redirect?  : <Redirect to="/" />; } */}
      </div>
    );
  }
}

export default NewMovie;
