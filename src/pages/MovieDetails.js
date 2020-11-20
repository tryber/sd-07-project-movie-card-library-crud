import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      movie: {},
      loading: false,
    };
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    this.setState({ loading: true }, async () => {
      const pegamovie = await movieAPI.getMovies();
      const id = this.props.match.params.id;
      const movie = pegamovie.find((movie) => movie.id === parseInt(id));
      this.setState({ loading: false, movies: pegamovie, movie: movie });
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetails;
