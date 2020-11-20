import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState({ loading: true }, async () => {
      const { match } = this.props;
      const movieId = match.params.id;
      const request = await movieAPI.getMovie(movieId);
      this.setState({ movie: request, loading: false });
    });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState(() => ({
      shouldRedirect: true,
    }));
  }
  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        {loading ? (
          <Loading />
        ) : (
          <MovieForm movie={movie} onSubmit={this.handleSubmit} />)}
      </div>
    );
  }
}

export default EditMovie;
