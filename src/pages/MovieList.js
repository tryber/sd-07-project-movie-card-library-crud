import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loaded: false,
    }
  }

  componentDidMount(){
    movieAPI.getMovies().then((movies)=>this.setState({movies:movies,loaded:true})
    )
  }


  render() {
    let { movies } = this.state;

    // Render Loading here if the request is still happening
    if(this.state.loaded){
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          <Link to='/movies/new'>ADICIONAR CARTÃO</Link>
        </div>
      );
    }
    return(
      <Loading/>
    )
  }
}

export default MovieList;
