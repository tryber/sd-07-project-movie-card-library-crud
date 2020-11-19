import React, { Component } from 'react';
import { Loading, MovieCard } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const data = await movieAPI.getMovies();
      this.setState({ movies: data, loading: false });
    });
  }
  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list" className="movie-list">    
        {loading ? <Loading /> : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
