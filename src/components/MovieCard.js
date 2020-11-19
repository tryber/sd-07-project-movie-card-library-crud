import React from 'react';
import PropTypes from 'prop-types';
import { link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      id,
      storyline,
      title,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h3>{storyline}</h3>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: propTypes.string.isRequired,
    id: propTypes.number.isRequired,    
  }).isRequired,
};
export default MovieCard;
