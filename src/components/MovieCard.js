import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <div className="card-media">
          <img className="card-media__img" src={movie.imagePath} alt="" />
          <h2 className="card-media__title">{movie.title}</h2>
        </div>
        <div className="card-description">
          <div className="card-description__labels">
            <div className="card-description__labels--genre">{movie.genre}</div>
            <div className="card-description__labels--genre">{movie.rating}</div>
          </div>
          <p>{movie.storyline}</p>
          <Link to={`movies/${movie.id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({}).isRequired,
};

export default MovieCard;
