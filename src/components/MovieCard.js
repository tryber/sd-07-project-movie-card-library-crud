import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`} >
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    storyline: PropTypes.string,
    movie: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
