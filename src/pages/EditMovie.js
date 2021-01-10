import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { MovieForm } from '../components';
import { Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: {},
      loading: false,
      status: null,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then(((movie) => {
      this.setState({
        movie,
        loading: true,
      });
    }));
  }

  handleSubmit(updatedMovie) {
    this.setState({
      status: 'loading',
    }, () => {
      movieAPI.updateMovie(updatedMovie)
      .then(() => {
        this.setState({
          status: '',
          shouldRedirect: true,
        });
      });
    });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (!loading) {
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
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
