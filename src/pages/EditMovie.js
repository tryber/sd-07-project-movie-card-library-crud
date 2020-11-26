import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movie: {},
      shouldRedirect: false,
    };
    this.fetchMovieEdit = this.fetchMovieEdit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieEdit();
  }

  fetchMovieEdit() {
    const { id } = this.props.match.params;
    this.setState({ status: 'loading' }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        status: '',
        movie,
      });
    });
  }

  handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({
        status: '',
        shouldRedirect: true,
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
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
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
