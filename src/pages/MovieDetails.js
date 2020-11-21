import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: '',
      status: '',
    };

    this.renderMovieDetail = this.renderMovieDetail.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovieDetail();
  }

  async fetchMovieDetail() {
    const movieId = this.props.match.params.id;
    const requestMovieDetail = await movieAPI.getMovie(movieId);
    this.setState({
      movie: requestMovieDetail,
    });
  }

  async deleteMovie() {
    const movieDeletedId = this.props.match.params.id;
    const requestMovieDelete = await movieAPI.deleteMovie(movieDeletedId);

    return requestMovieDelete;
  }

  renderMovieDetail() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div className="movie-card">
        <img alt="Movie Cover" src={`../${imagePath}`} className="movie-card-image" />
        <div className="movie-card-body">
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div className="movie-details">
          <Link to={`./${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={this.deleteMovie}>DELETAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { movie } = this.state;

    return (
      <div data-testid="movie-details">
        {(movie === '') ? <Loading /> : this.renderMovieDetail()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
