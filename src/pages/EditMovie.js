import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleFetchMovie = this.handleFetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
  }

  async handleFetchMovie() {
    const mv = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movie: mv,
      status: 'loaded',
    });
  }

  componentDidMount() {
    this.setState(
      {
        status: 'loading',
      },
      this.handleFetchMovie,
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      // Redirect
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
