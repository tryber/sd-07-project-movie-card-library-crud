import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>Details</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
