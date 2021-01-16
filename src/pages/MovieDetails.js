import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loaded: false,
    };

    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loaded: true,
    });
  }

  deleteCard() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loaded } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loaded) {
      return (
        <div data-testid="movie-details">
          <h1>{`Title: ${title}`}</h1>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          {/* O link tem que ser o caminho da route lá no app */}
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to={'/'}>VOLTAR</Link>
          <Link to={'/'} onClick={this.deleteCard}>
            DELETAR
          </Link>
        </div>
      );
    }
    return <Loading message="Carregando..." />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
