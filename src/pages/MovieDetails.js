import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.getMovie = this.getMovie.bind(this);
    this.state = {
      resultDetails: {},
      loaded: false,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getMovie(id)
  }

  async getMovie(movieId) {
    const resultDetails = await movieAPI.getMovie(movieId)
    this.setState({ resultDetails, loaded: true })
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = {};
    const { loaded } = this.state;

    if (loaded) {
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
      );
    } return <Loading />;
  }
}

export default MovieDetails;
