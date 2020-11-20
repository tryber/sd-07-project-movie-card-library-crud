import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const link = `/movies/${this.props.movie.id}`;
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>Título: {this.props.movie.title}</p>
        <p>Sinopse: {this.props.movie.storyline}</p>
        <Link to={link}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
