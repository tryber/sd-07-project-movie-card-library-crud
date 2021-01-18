import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.goDeleteMovie = this.goDeleteMovie.bind(this);

    this.state = {
      movie: {},
      status: 'loading',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { getMovie } = movieAPI;
    getMovie(id).then((movie) => {
      this.setState({
        movie,
        status: 'loaded',
      });
    });
  }

  goDeleteMovie() {
    const { id } = this.props.match.params;
    const { deleteMovie } = movieAPI;
    deleteMovie(id);
  }

  render() {
    const { status, movie } = this.state;
    const { id } = this.props.match.params;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = movie;

    return (
      <div data-testid="movie-details">
        {
          status === 'loading'
            ? <Loading />
            : (
              <span>
                <h2>{title}</h2>
                <div>
                  <img alt="Movie Cover" src={`../${imagePath}`} />
                  <p>{`Subtítulo: ${subtitle}`}</p>
                  <p>{`Sinopse: ${storyline}`}</p>
                  <p>{`Gênero: ${genre}`}</p>
                  <p>{`Avaliação: ${rating}`}</p>
                </div>
                <Link to={`${id}/edit`}>EDITAR</Link>
                <Link to="/" onClick={this.goDeleteMovie}>DELETAR</Link>
                <Link to="/">VOLTAR</Link>
              </span>
            )
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
