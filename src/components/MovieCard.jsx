import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { id, title, storyline, subtitle, rating, imagePath },
    } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <p>{rating}</p>
        <p>
          <Link to={`movies/${id}`}>VER DETALHES</Link>
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.number, PropTypes.string).isRequired,
};
export default MovieCard;
