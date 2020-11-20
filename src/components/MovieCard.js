import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, storyline, id, subtitle } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={imagePath} alt={title} className="movie-card-image" />
        <h4 className="movie-card-title">{title}</h4>
        <div className="movie-card-body">
          <h3 className="movie-card-subtitle">{subtitle}</h3>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link to={`/movies/${id}`} className="movie-card-button-details" >VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
