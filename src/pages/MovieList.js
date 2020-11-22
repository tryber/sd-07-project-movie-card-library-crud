import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      displayLoadingMessage: true,
    }
  }

  async componentDidMount() {
    const response = await movieAPI.getMovies();
    this.setState({
      movies: response,
      displayLoadingMessage: false,
    })
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>
        { this.state.displayLoadingMessage && <Loading /> /* https://app.betrybe.com/course/live-lectures/sd-cohort-7#aula-131-react-ciclo-de-vida-de-componentes - tempo: 1:00h*/ }
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
