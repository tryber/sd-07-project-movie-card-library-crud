import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <img alt={`img of ${title}`} src={`../${imagePath}`} />
        <h4>{storyline}</h4>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
