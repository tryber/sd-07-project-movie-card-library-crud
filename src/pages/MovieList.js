import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NewMovie, MovieDetails, EditMovie } from './index';
import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() { this.fetchMovies(); }

  async fetchMovies() {
    this.setState({
      movies: await movieAPI
        .getMovies().then((element) => element),
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
        {
          loading ? <Loading /> : movies.map((movie) =>
            <MovieCard key={movie.title} movie={movie} />,
          )
        }
      </div>
    );
  }
}

export default MovieList;
