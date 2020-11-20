import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="Movie Cover" />
        <h3>{title}</h3>
        <h5>{storyline}</h5>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: Proptypes.shape({
    id: Proptypes.string,
    title: Proptypes.string,
    storyline: Proptypes.string,
    imagePath: Proptypes.string,
  }).isRequired,
};

export default MovieCard;
