import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.addMovieState = this.addMovieState.bind(this);
    this.state = {
      status: 'loading',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }

  async fetchMovie(id) {
    const movie = await movieAPI.getMovie(id);
    await this.addMovieState(movie);
  }

  addMovieState(movie) {
    this.setState({
      movie,
      status: '',
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: updatedMovie,
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
