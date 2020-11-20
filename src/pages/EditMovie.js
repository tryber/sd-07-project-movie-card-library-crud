import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }
  async fetchMovie() {
    const requestMovie = await movieAPI.getMovie(this.props.match.params.id);
    if (requestMovie) this.setState({ movie: requestMovie, status: '' });
  }
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }
  render() {
    const { status, shouldRedirect, movie } = this.state;
    // console.log(movie)
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default EditMovie;
