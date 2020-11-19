import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.func = this.func.bind(this);
    this.state = {
      movies: [],
      movieList: false,
    }
  }
  componentDidMount() {
    this.func();
  }

  async func() {
    const fetch = await movieAPI.getMovies();
    this.setState({
      movies: fetch,
      movieList: true,
    });
  }

  render() {
    const { movies, movieList } = this.state;
    return (
      <div data-testid="movie-list">
        {(movieList)
          ? movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
          : <Loading />
        }
      </div>
    );
  }
}

export default MovieList;
