import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { movieShape } from './MovieCard';

class ShowDetails extends Component {
  render() {
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.props.movie;
    return (
      <div data-testid="movie-details">
        <img
          className="movie-details-image"
          alt="Movie Cover"
          src={`../${imagePath}`}
        />
        <h2>{`Title: ${title}`}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p className="movie-details-rating">{`Rating: ${rating}`}</p>
        <Link className="button-back" to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default ShowDetails;

ShowDetails.propTypes = { movie: propTypes.shape(movieShape).isRequired };
