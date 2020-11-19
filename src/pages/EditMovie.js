import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const requestMovie = await movieAPI.getMovie(match.params.id);
    this.setState({ movie: requestMovie, status: 'loaded' });
  }

  async handleSubmit(updateMovie) {
    await movieAPI.updateMovie(updateMovie);
    this.setState({ shouldRedirect: true });
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
