import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(){
    super();

    this.fachMovie = this.fachMovie.bind(this);
    
    this.state = {
      loaded: false,
      movie: {},
    };
  };
      componentDidMount() {
        this.fachMovie();
      }

   async fechMovie() {
    const movie = await movieAPI.getMovie(this.props.match.params.movie.id);
    this.setState({
      loaded: true,
      movie: movie,
    });
  };

  async HandleDelete(){
    await movieAPI.deleteMovie(this.props.match.params.movie);
  }
  render() {
    if (!this.state.loaded) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
