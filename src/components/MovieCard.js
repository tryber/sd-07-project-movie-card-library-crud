import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      id, title, storyline, imagePath,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <div>
          <img src={imagePath} alt="Movie" />
          <p>{title}</p>
          <p>{storyline}</p>

        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
