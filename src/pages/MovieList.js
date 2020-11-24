import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState({ loading: true }, async () => {
      const dataRequest = await movieAPI.getMovies();
      this.setState({ movies: dataRequest, loading: false });
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    const loadingRender = <Loading />;

    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <span>{this.state.loading ? loadingRender : ''}</span>
      </div>
    );
  }
}

export default MovieList;
