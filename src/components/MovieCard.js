import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={movie.imagePath} alt="banner movie" />
        </div>
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.storyline}</p>
        </div>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = { movie: PropTypes.array.isRequired };

export default MovieCard;
