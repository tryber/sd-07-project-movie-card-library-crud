import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.get = this.get.bind(this);
    this.state = {
      movie: {},
      loading: false,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.get(id);
  }

  async get(id) {
    this.setState({ loading: true }, async () => {
      const movies = await movieAPI.getMovie(id);
      this.setState({ movie: movies, loading: false });
    });
  }

  async removeMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
    console.log('Thadeu');
  }
  render() {
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = this.state.movie;

    return this.state.loading ? (
      <Loading />
    ) : (
      <div data-testid="movie-details" className="movie-card">
        <img
          alt="Movie Cover"
          src={`../${imagePath}`}
          className="movie-card-image"
        />
        <div className="movie-card-body">
          <p className="movie-card-title">{`Title: ${title}`}</p>
          <p className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</p>
          <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div className="buttons">
            <Link to={`/movies/${id}/edit`} className="button-text">
              EDITAR
            </Link>
            <button
              className="button-text"
              onClick={() => this.removeMovie(id)}
            >
              <Link to="/" className="button-text">
                DELETAR
              </Link>
            </button>
            <Link to="/" className="button-text">
              VOLTAR
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
