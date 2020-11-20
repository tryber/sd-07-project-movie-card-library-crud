import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.updateMovieList = this.updateMovieList.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.updateMovieList();
  }

  async updateMovieList() {
    this.setState(
      { loading: true },
      async () => {
        const moviesFound = await movieAPI.getMovies();
        this.setState({
          movies: moviesFound,
          loading: false,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    const loadingElement = <Loading />;
    const movieCards = movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);

    return (
      <div data-testid="movie-list">
        <p>{loading ? loadingElement : movieCards}</p>
      </div>
    );
  }
}

export default MovieList;
