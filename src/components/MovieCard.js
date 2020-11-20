import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

class MovieCard extends React.Component {
  render() {
    const { title, storyline, imagePath, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link className="edit-link" to={`/movies/${id}`}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    bookmarked:PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
}
export default MovieCard;
