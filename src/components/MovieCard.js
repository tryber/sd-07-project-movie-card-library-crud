import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, id, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <p>{title} </p>
        <p>{subtitle} </p>
        <img src={imagePath} alt={imagePath} />
        <p>{storyline} </p>
        <Link to={`/movies/${id}`}>VER DETALHES </Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
