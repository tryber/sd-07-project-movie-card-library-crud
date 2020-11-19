import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
// import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: false,
    }
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const data = await movieAPI.getMovies()
      console.log(data)
      this.setState({ movies: data, loading: false });
    });
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;
    console.log(this.state.movies)
    let option
    if (loading) {
      option = <p>Carregando...</p>;
    } else {
      option = <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>;
    }
    return (
      <div>
        { option}
      </div>

    );
  }
}

export default MovieList;
