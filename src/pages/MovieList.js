import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';


import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    }
  }

  async fetchMovies() {
    const request = await movieAPI.getMovies();
    this.setState(() => ({
      movies: request,
      loading: false,
    }));
  }
  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) return <Loading /> 

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        }
        <Link className='add-link' to='/movies/new'>
                  ADICIONAR CARTÃO
            </Link>
      </div>
    );
  }
}

export default MovieList;
