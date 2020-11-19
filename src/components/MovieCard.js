import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h3>{title}</h3>
        <img src={imagePath} alt={title} />
        <p>{storyline}</p>
        <Link to={`/movies/${id}`} >VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
