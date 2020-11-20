import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, imagePath } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <img scr={imagePath} alt={title} />
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
        <p><Link to={`movies/${id}`}>VER DETALHES</Link></p>
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
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
