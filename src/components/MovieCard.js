import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../components/Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { id, imagePath, title, subtitle, storyline, rating } = this.props.movie;
    const linkPath = `/movies/${id}`;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={linkPath}>VER DETALHES</Link>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  })),
}.isRequired;

export default MovieCard;
