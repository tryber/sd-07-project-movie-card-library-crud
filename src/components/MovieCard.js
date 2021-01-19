import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h2>{movie.subtitle}</h2>
        <p>{movie.storyline}</p>
        <p>{movie.rating}</p>
        <div>
          <span><Link to={`/movies/${movie.id}`}>VER DETALHES</Link></span>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
