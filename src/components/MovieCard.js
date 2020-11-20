import React from 'react';
import Proptypes from 'prop-types';
import movies from '../services/movieData';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div><img src={imagePath} alt={title} className="content" /></div>
        <div><h4>{title}</h4></div>
        <div><p className="storyline">{storyline}</p></div>
        <div className="details-content">
          <Link to={`/movies/${id}`} className="details">VER DETALHES</Link>
      </div>
    </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string.isRequired,
    storyline: Proptypes.string.isRequired,
    imagePath: Proptypes.string.isRequired,
    id: Proptypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
