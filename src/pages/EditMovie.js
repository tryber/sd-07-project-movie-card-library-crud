import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loaded',
      shouldRedirect: false,
      movie: {},
    };
    this.fetchMovieAPI = this.fetchMovieAPI.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovieAPI();
  }

  fetchMovieAPI() {
    this.setState({
      status: 'loading',
    }, async () => {
      const { id } = this.props.match.params;
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        status: 'loaded',
      });
    });
  }

  handleSubmit(updatedMovie) {
    this.setState({
      shouldRedirect: true,
    }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({
        status: 'loaded',
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
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
