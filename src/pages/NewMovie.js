import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { history } = this.props;
    movieAPI.createMovie(newMovie)
      .then((response) => response === 'OK' && history.push('/'));
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

NewMovie.propTypes = {
  history: PropTypes.shape(PropTypes.object),
}.isRequired;

export default NewMovie;
