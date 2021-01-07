import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';


import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMoveis = this.fetchMoveis.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMoveis();
  }

  async fetchMoveis() {
    const endpoint = await movieAPI.getMovies();
    this.setState({
      movies: endpoint,
      loading: false,
    });
  }
  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div>
          <span><Link to="/movies/new">ADICIONAR CARTÃO</Link></span>
        </div>
      </div>
    );
  }
}

export default MovieList;
