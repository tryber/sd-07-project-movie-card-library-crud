import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import listOfMovies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: listOfMovies,
      isLoading: false,
    };

    function setStateFunction(state) {
      const changeLoading = () => {
        if (state.isLoading === true) {
          return false;
        }
        return true;
      };
      return { ...state, isLoading: { changeLoading } };
    }

    function handleLoading(elem) {
      movieAPI.getMovies().then(() => {
        elem.setState(setStateFunction(elem.state));
      });
    }

    handleLoading(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  // Inspirado no projeto de Alexandre Rufino
  async fetchMovies() {
    const response = await movieAPI.getMovies();
    const updateMovieList = [];
    response.forEach((movie) => {
      updateMovieList.push(movie);
    });
    this.setState({
      movies: updateMovieList,
    });
  }

  render() {
    const { movies } = this.state;

    if (!this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
