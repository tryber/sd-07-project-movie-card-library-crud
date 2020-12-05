import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor() {
    super();

    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const fetchPromise = await movieAPI.getMovie(id);
    this.attState(fetchPromise);
  }

  attState(movie) {
    this.setState({
      movie,
      isLoading: false,
    });
  }

  movieCardDetail() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props.match.params;
    return (
      <div className="movie-detail" data-testid="movie-details">
        <img className="movie-detail-image" alt="Movie Cover" src={`../${imagePath}`} />
        <p className="movie-detail-title">{title}</p>
        <div className="movie-detail-body">
          <p className="movie-detail-subtitle">{`Subtitle: ${subtitle}`}</p>
          <p className="movie-detail-storyline">{`Storyline: ${storyline}`}</p>
          <p className="movie-detail-genre">{`Genre: ${genre}`}</p>
          <p className="rating">{`Rating: ${rating}`}</p>
        </div>
        <div className="movie-detail-link">
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
        </div>
      </div>);
  }

  render() {
    return (
      <div>
        {this.state.isLoading === true ? <Loading /> : this.movieCardDetail()}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
