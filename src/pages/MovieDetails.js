import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.toLixeira = this.toLixeira.bind(this);

    this.state = {
      movie: {},
      carregou: false,
      povolta: false,
    };
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((obj) => this.setState({ movie: obj, carregou: true }));
  }

  toLixeira() {
    movieAPI
      .deleteMovie(this.state.movie.id)
      .then(() => this.setState({ povolta: true }));
  }
  render() {
    if (this.state.povolta) {
      return <Redirect to="/" />;
    }

    if (this.state.carregou === false) {
      return <Loading />;
    }

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
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.toLixeira}>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
