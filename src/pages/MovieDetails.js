import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor (props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movieId: '',
      movie: [],
      loading: true,
    }
  }

  fetchMovie() {
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(movieId);
      this.setState({ movie: movie, loading: false });
    });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state.loading
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> : 
        <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        }
      </div>
    );
  }
}

export default MovieDetails;
