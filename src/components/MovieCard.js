import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath } = movie;
    return (
      <div className="movie-card" data-testid='movie-card'>
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link to={`/movies/${movie.id}`}><p className="movie-card-details">VER DETALHES</p></Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes
  .objectOf([PropTypes.string, PropTypes.bool, PropTypes.number])
    .isRequired,
  };

export default MovieCard;
