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
      status: true,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchAMovie = this.fetchAMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchAMovie(id);
  }

  fetchAMovie(id) {
    this.setState({
      status: true,
    }, () => {
      movieAPI.getMovie(id).then((response) => {
        this.setState({
          status: false,
          movie: response,
          shouldRedirect: false,
        });
      });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="edit-movie">
        {status ? <Loading /> : <MovieForm movie={movie} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
