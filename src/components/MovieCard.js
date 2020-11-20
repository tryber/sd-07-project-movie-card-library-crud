import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline } = movie;
    return (
      <div data-testid="movie-card">
        {title}
        {storyline}
        <Link to="/movies/:id">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
