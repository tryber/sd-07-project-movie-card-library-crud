import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({
        loading: false,
        movies,
      }));
  }

  render() {
    const { movies, loading } = this.state;
    return(
      <div data-testid="movie-list">
        <div>
          { loading ? <Loading /> :
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <button>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
      </div>
    );
  }
}

export default MovieList;
