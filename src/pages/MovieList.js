import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.get = this.get.bind(this);
    this.state = {
      movies: [],
      movieList: false,
    };
    this.get();
  }

  componentDidMount() {
    this.get();
  }
  async get() {
    const fetch = await movieAPI.getMovies();
    this.setState({ movies: fetch, movieList: true });
  }

  render() {
    const { movies, movieList } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movieList === true ? (
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default MovieList;
