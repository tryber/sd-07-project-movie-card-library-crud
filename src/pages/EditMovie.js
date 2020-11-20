import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this)
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
    this.setState(() => ({
      shouldRedirect: true,
    }))
  }

  async fetchMovie() {
    const { match } = this.props;
    const movieId = match.params.id;
    const request = await movieAPI.getMovie(movieId);
    
    this.setState(() => ({
      movie: request,
      status: false,
    }))
  }

  componentDidMount() {
    this.fetchMovie()
  }
  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />
    }

    if (status === 'loading') {
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
