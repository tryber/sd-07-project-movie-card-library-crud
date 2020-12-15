import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movie: [],
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const fetchMovie = await movieAPI.getMovie(id);
    this.setState({ movie: fetchMovie, status: 'notLoading' });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.number.isRequired,
};

export default EditMovie;
