import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      MovieDetails: false,
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.get(id);
  }
  get = async(id) => {
    const fetch = await movieAPI.getMovie(id);
    this.setState({movie: fetch, MovieDetails: true});
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      this.state.MovieDetails ?
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div> : <Loading />
    );
  }
}

export default MovieDetails;
