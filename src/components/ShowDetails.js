import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { movieShape } from './MovieCard';

class ShowDetails extends Component {
  render() {
    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.props.movie;
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
        </div>
      </div>
    );
  }
}

export default ShowDetails;

ShowDetails.propTypes = { movie: propTypes.shape(movieShape).isRequired };
