import React from 'react';
import PropTypes from 'prop-types'
class MovieCard extends React.Component {
  render() {
    const { title, movie } = this.props;
    console.log(title, movie);
    return (
      <div data-testid="movie-card">
        Movie Card
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
