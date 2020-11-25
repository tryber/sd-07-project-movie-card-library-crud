import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMatchParamMovie = this.getMatchParamMovie.bind(this);
  }

  componentDidMount() {
    this.getMatchParamMovie(this.props.match.params);
  }

  getMatchParamMovie({ id }) {
    movieAPI.getMovie(id).then((movie) =>
      this.setState({ status: 'ready', movie }),
    );
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then((movie) =>
      this.setState({ shouldRedirect: true, movie }),
    );
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

export default EditMovie;
