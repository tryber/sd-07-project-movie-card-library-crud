import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;
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
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
