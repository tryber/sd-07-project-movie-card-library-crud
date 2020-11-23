import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor() {
    super();

    this.getMovieDetails = this.getMovieDetails.bind(this);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.getMovieDetails(this.props.id);
  }

  async getMovieDetails(idMovie) {
    this.setState(
      {
        loading: true,
        shouldRedirect: false,
      },
      async () => {
        const movieDetail = await movieAPI.getMovie(idMovie);
        this.setState(() => ({ loading: false, movie: movieDetail }));
      },
    );
  }

  async deleteMovie(idMovie) {
    const { onClick } = this.props;
    onClick();
    await movieAPI.deleteMovie(idMovie);
  }
  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;
    const { id, onClick } = this.props;
    const urlMovieEdit = `/movies/${id}/edit`;

    return (
      <div className="movie-card movie-details">
        {loading ? <Loading /> :
        <div data-testid="movie-details" className="movie-card-body">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h1 className="movie-card-title">{title}</h1>
          <p className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</p>
          <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <div className="movie-card-rating">
            <p className="rating">{`Rating: ${rating}`}</p>
          </div>
          <div className="buttons-movie-details">
            <Link className="button link" to="/" onClick={onClick}> VOLTAR</Link>
            <Link className="button link" to={urlMovieEdit}>EDITAR</Link>
            <Link className="button link" to="/" onClick={() => this.deleteMovie(id)}>DELETAR</Link>
          </div>
        </div>}
      </div>
    );
  }
}

MovieDetails.propTypes = ({
  id: PropTypes.number,
  onClick: PropTypes.func,
}).isRequired;

export default MovieDetails;
