import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);

    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id).then((movie) => {
        this.setState({ movie, loading: false });
      });
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    const { id } = this.props.match.params;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details" className="movie-details">
        <img
          alt="Movie Cover"
          src={`../${imagePath}`}
          className="movie-card-image"
        />
        <h2 className="movie-card-title">{`Title: ${title}`}</h2>
        <h4 className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</h4>
        <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
        <p className="movie-card-genre">{`Genre: ${genre}`}</p>
        <p className="movie-card-rating">{`Rating: ${rating}`}</p>

        <div className="links-movie-details">
          <Link
            to="/"
            onClick={() => movieAPI.deleteMovie(id)}
            className="link-deletar movie-list-link"
            type="button"
          >
            DELETAR
          </Link>
          <Link
            to={`/movies/${id}/edit`}
            className="link-editar movie-list-link"
          >
            EDITAR
          </Link>
          <Link to="/" className="link-voltar movie-list-link">
            VOLTAR
          </Link>
        </div>
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
