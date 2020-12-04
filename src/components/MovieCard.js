import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const id = movie.id;
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.storyline}</p>
        <Link to={{ pathname: `/movies/${id}`, id }}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = { movie: PropTypes.element.isRequired };
