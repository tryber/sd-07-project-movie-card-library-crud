import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      title,
      id,
      storyline,
      rating,
      imagePath,
      genre,
      subtitle,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img alt="movie-banner" src={imagePath} />
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h4>{storyline}</h4>
        <p><em>{genre}</em></p>
        <p>{rating}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
