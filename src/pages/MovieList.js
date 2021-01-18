import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    await getMovies().then((movies) => {
      this.setState({
        movies,
      });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <span>
          {
            movies.length === 0
              ? <Loading />
              : (
                <div data-testid="movie-list">
                  {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
                  <Link to="/movies/new">ADICIONAR CARTÃO</Link>
                </div>
              )
          }
        </span>
      </div>
    );
  }
}

export default MovieList;
