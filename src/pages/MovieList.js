import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
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
    const loadingState = this.state.loading;
    const loadingRender = <Loading />;
    return (
      <div className="movie-list" data-testid="movie-list">
        {
          loadingState ?
          loadingRender :
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        }
        <Link to="movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
