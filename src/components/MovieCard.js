import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import '../styles/components/MovieCard.css';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { id, imagePath, title, subtitle, storyline } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link className="button-link" to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

export const movieShape = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  storyline: propTypes.string.isRequired,
  imagePath: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

MovieCard.propTypes = { movie: propTypes.shape(movieShape).isRequired };
