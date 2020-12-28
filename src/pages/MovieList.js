import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends React.Component {
  constructor() {
    super();

    this.fetchAPI = this.fetchAPI.bind(this);

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
   this.fetchAPI();
  }

  fetchAPI() {
    this.setState({ loading: true }, async () => {
      const movies = await movieAPI.getMovies();
      this.setState((previousState) => ({
        loading: false,
        movies: [...previousState.movies, ...movies],
      }));
    });
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list">
        <div>
          { loading ? <Loading /> :
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
