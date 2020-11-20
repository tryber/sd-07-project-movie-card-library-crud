import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
// import MovieList from './MovieList';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    this.setState(
      { status: 'loading' }, // Primeiro parâmetro da setState
      async () => {
        const moviesGetted = await (movieAPI.getMovies());
        this.setState({
          movie: moviesGetted.find((e) => e.id === parseInt(this.props.match.params.id, 10)),
          status: '',
        });
      });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (status === 'loading') {
      return <Loading />;
    }

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
