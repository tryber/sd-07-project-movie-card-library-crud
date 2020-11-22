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

  async handleSubmit(newMovie) {
    const createMovie = await movieAPI.createMovie(newMovie);

    if (createMovie === 'OK') {
      this.setState({
        redirect: true,
      });
    }
  }

  render() {
    if (this.state.redirect === true) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
