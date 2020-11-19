import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import movies from '../services/movieData';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      movie: undefined,
    };
    
  }
  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((movie) => {
      this.setState({ movie: movie, loaded: true })})
  }
  deleteMovie(){

  }
  render() {
    
    if (this.state.loaded) {
      const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/`}>VOLTAR</Link>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <button>DELETAR</button>
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieDetails;
