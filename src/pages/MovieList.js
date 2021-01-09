import React, { Component } from "react";
import MovieCard from "../components/MovieCard";

import * as movieAPI from "../services/movieAPI";

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies() {
    this.setState({ loadig: true });
    movieAPI.getMovie().then((movies) => {
      this.setState({
        loading: false,
        movies,
      });
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
