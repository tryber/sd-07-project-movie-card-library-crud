import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptype from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      loading: true,
      movie: {},
    };
  }
  componentDidMount() {
    this.fetchMoviesDetails();
  }
  fetchMoviesDetails() {
    this.setState({ loading: true }, async () => {
      const { match } = this.props;
      const reqMovie = await movieAPI.getMovie(match.params.id);
      this.setState({ movie: reqMovie, loading: false });
    });
  }
  deleteMovie() {
    const { match } = this.props;
    movieAPI.deleteMovie(match.params.id);
  }
  renderMovie({ id, title, storyline, imagePath, genre, rating, subtitle }) {
    return (
      <div className="movie-details">
        <img className="movie-details-img" alt="Movie Cover" src={`../${imagePath}`} />
        <p className="movie-details-title">
          Título: <span>{title}</span>
        </p>
        <p className="movie-details-subtitle">
          Subtítulo: <span>{subtitle}</span>
        </p>
        <p className="movie-details-storyline">
          Sinopse: <span>{storyline}</span>
        </p>
        <p className="movie-details-genre">
          Gênero: <span>{genre}</span>
        </p>
        <p className="movie-details-rating">
          Avaliação: <span>{rating}</span>
        </p>
        <div className="movie-details-links">
          <Link className="movie-details-link" to="/">
            VOLTAR
          </Link>
          <Link className="movie-details-link" to={`/movies/${id}/edit`}>
            EDITAR
          </Link>
          <Link className="movie-details-link" to="/" onClick={this.deleteMovie}>
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
  render() {
    const { loading, movie } = this.state;

    return (
      <div data-testid="movie-details">
        <div>{loading ? <Loading /> : this.renderMovie(movie)}</div>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: Proptype.shape({
    params: Proptype.shape({
      id: Proptype.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
