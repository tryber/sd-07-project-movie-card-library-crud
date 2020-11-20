import React, { Component } from 'react';
import { MovieCard, Loading } from '../components/index';
import { Link } from 'react-router-dom'
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }
  async fetchMovies() {
    const requestMovies = await movieAPI.getMovies();
    if (requestMovies) this.setState({movies: requestMovies, loading: false});
  }
  componentDidMount() {
    this.fetchMovies()
  }
    
  render() {
    const { movies, loading } = this.state;
    if (loading === true) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <Link to='/movies/new'>ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
