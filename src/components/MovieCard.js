import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } = this.props.movie;

    return (
      <div data-testid="movie-card" className="container-movie">
        <img alt="Movie Cover" src={imagePath} />
        <h4>{title}</h4>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`} >VER DETALHES</Link>
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
