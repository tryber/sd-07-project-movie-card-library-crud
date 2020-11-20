import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyline, rating, id } = movie;
    return (
      <div data-testid="movie-card">
        <div>
          <h1> {title} </h1>
          <img src={imagePath} alt="Foto Filme" />
        </div>
        <div>
          <h3> {subtitle} </h3>
          <p> {storyline} </p>
          <span> {rating} </span>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

MovieCard.defaultProps = {
  movie: {
    title: "",
    imagePath: "",
    subtitle: "",
    storyline: "",
    rating: 0,
    id: "",
  },
};

export default MovieCard;
