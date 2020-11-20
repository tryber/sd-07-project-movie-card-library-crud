import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props); 

    this.movieById = this.movieById.bind(this);
    this.showMovie = this.showMovie.bind(this);

    this.state = {
      movie: {
        id: 0,
        title: '',
        storyline: '',
        imagePath: '',
        genre: 'action',
        rating: 0,
        subtitle: '',
      },
      loading: true,
    };
  }

  componentDidMount() {
    this.movieById(this.props.match.params.id);
  }

  async movieById(id) {
    const dataMovies = await movieAPI.getMovie(id);
    this.setState({ movie: dataMovies, loading: false });
  }

  showMovie() {
    const movie = this.state.movie 
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h2>{`Title: ${title}`}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }

  render() {
    return (this.state.loading ? <Loading /> : this.showMovie());
  }
}

export default MovieDetails;
