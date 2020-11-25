import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor() {
    super();

    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  attState(movie) {
    this.setState({
      movie,
      isLoading: false,
    });
  }

  async componentDidMount() {
    const { params } = this.props.match;
    const fetchPromise = await movieAPI.getMovie(params.id);
    this.attState(fetchPromise);
  }

  movieCardDetail() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div className="movie-detail" data-testid="movie-details">
        <img className="movie-detail-image" alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <div className="movie-detail-body">
          <p className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</p>
          <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
          <p className="movie-card-genre">{`Genre: ${genre}`}</p>
          <p className="rating">{`Rating: ${rating}`}</p>
        </div>
      </div>)
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    return (
      <div>
        {this.state.isLoading === true ? <Loading /> : this.movieCardDetail()}
      </div>
    );
  }
}

export default MovieDetails;
