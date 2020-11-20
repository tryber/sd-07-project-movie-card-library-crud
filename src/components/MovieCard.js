import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath, subtitle } = movie;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <img src={imagePath} alt="movie-folder" />
        <div>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div >
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};
