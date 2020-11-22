import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieForm } from '../components';
import { Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loadingMsg: true,
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      loadingMsg: false,
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { loadingMsg, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (loadingMsg === true) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie" className="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
};

EditMovie.defaultProps = {
  match: PropTypes.shape({
    params: {},
  }),
};

export default EditMovie;
