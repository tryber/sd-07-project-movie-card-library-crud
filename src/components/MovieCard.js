import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <h3>{storyline}</h3>
        <img src={imagePath} alt={`${title} movie`} />
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
