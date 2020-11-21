import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components/index';
import '../styles/pages/MovieDetails.css';
import '../App.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }


  async handleDelete() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  async fetchMovie(id) {
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        loading: false,
      });
    });
  }

  render() {
    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;

    const { loading } = this.state;
    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return (
      <div className="div-details-container" data-testid="movie-details">
        <div className="image-container">
          <img
            className="movie-details-image"
            alt="Movie Cover"
            src={`../${imagePath}`}
          />
        </div>
        <h2>{`Title: ${title}`}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p className="movie-details-rating">{`Rating: ${rating}`}</p>
        <div className="button-links-container">
          <Link className="button-link" to="/">
            VOLTAR
          </Link>
          <Link className="button-link" to={`${id}/edit`}>
            EDITAR
          </Link>
          <Link className="button-link" to="/" onClick={this.handleDelete}>
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
