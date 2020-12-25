import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fechMovie = this.fechMovie.bind(this);

    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fechMovie()
    }

   fechMovie(){
      movieAPI.getMovies().then(movies => this.setState({ movies: movies, loading: false}));
    }


  

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return loading ? <Loading /> : 
    (
      <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        }
      </div>
    );
  }
}

export default MovieList;
