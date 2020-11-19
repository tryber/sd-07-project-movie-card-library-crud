import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.defineState = this.defineState.bind(this);

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    const resultRequest = await getMovies();
    this.defineState(resultRequest);
  }

  defineState(movie) {
    this.setState({
      movies: movie,
    });
  }

  render() {
    const { movies } = this.state;
    const renderMovieList = movies
      .map((movie) => <MovieCard key={movie.title} movie={movie} />);
    const link = <Link to={'/movies/new'} >ADICIONAR CARTÃO</Link>;

    return (
      <div data-testid="movie-list">
        {movies.length > 0 ? link : <p />}
        {movies.length > 0 ? renderMovieList : <Loading />}
      </div>
    );
  }
}

export default MovieList;
