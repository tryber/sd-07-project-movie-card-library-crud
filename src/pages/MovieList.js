import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loaded: false,
    }
  }

  componentDidMount(){
    movieAPI.getMovies().then(()=>this.setState({movies:movies,loaded:true})
    )
  }


  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if(this.state.loaded){
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      );
    }
    return(
      <Loading/>
    )
  }
}

export default MovieList;
