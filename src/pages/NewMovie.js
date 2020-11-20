import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components/index.js';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
      isLoading: false,
    };
  }

  handleSubmit(newMovie) {
    this.setState({ isLoading: true },
      async () => {
        await createMovie(newMovie);
        this.setState({ isLoading: false, shouldRedirect: true });
      });
  }

  render() {
    const { shouldRedirect, isLoading } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (isLoading) {
      return <Loading />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
