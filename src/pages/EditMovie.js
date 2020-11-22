import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
      id: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.listMovie();
  }

  listMovie() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then((resolve) => {
      if (resolve.title !== undefined) {
        this.setState({ movie: resolve, status: '', shouldRedirect: false, id });
      }
    })
    .catch((error) => console.log('Promises rejected: ', error));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
    .then((resolve) => {
      console.log(resolve);
      this.setState({ shouldRedirect: true });
    })
    .catch((error) => console.log('Promises rejected: ', error));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      // Redirect
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
