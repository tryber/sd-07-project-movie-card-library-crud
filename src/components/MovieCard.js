import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { storyline, imagePath, id, title } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img className="image-movie" alt="movie" src={imagePath} />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <Link className="link" to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
