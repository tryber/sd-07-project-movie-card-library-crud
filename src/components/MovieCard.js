import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, imagePath } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <img src={imagePath} alt={`Capa do filme ${title}`} />
        <h5>{storyline}</h5>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
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
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
