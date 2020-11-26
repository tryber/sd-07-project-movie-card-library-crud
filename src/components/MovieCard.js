import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, imagePath, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <p>{title}</p>
        <img src={imagePath} alt="" />
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
}

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    id: 0,
    title: '',
    storyline: '',
    imagePath: '',
  }),
}

export default MovieCard;
