import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <h3>{storyline}</h3>
        <img src={imagePath} alt={`${title} movie`} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
