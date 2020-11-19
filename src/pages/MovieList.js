import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loadingText: false,
    };
    this.gettingMovies = this.gettingMovies.bind(this);
    this.screenFunction = this.screenFunction.bind(this);
  }

  componentDidMount() {
    this.gettingMovies();
  }

  async gettingMovies() {
    this.setState({
      loadingText: true,
    });
    const moviesList = await movieAPI.getMovies();
    this.setState({
      movies: moviesList,
      loadingText: false,
    });
    console.log(moviesList);
  }

  screenFunction(moviesList) {
    if (!this.state.loadingText) {
      return moviesList.map((movie) => <MovieCard key={movie.title} movie={movie} />);
    }
    return <Loading />;
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {this.screenFunction(movies)}
      </div>
    );
  }
}

export default MovieList;
