import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  async fetchMovieDetails() {
    const { match: { params: { id } } } = this.props;
    // vou pegar o ID da URL e passar como parametro.
    const movieDetails = await movieAPI.getMovie(id);
    this.setState({ movie: movieDetails, loading: false });
  }

  render() {
    // Change the condition to check the state
    if (this.state.loading) return <Loading />;

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
