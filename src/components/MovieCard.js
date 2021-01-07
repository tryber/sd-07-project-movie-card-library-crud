import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h2>{storyline}</h2>
        <img src={imagePath} alt="Capas dos Filmes" />
        <br />
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.object.isRequired,
  }).isRequired,
};

export default MovieCard;
