import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      status: '',
      redirect: false,
    };
  }

  async handleSubmit(newMovie) {
    const { createMovie } = movieAPI;
    this.setState({ status: 'loading' });
    await createMovie(newMovie);
    this.setState({ status: '', redirect: true });
  }

  render() {
    if (this.state.status === 'loading') return <Loading />;
    if (this.state.redirect) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
