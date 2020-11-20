import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
    this.state = {
      loading: true,
      movie: {},
    };
  }

  updateState(movie) {
    this.setState({
      movie,
      loading: false,
    });
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const fetchedMovie = await movieAPI.getMovie(id);
    this.updateState(fetchedMovie);
  }

  render() {
    const { loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      (loading)
        ? <Loading />
        : <div data-testid="movie-details">
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
