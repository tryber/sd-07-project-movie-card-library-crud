import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to={'/'} />;
    }
    const movie = {
      id: '',
      title: '',
      subtitle: '',
      imagePath: '',
      bookmarked: false,
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    return (
      <div data-testid="new-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
