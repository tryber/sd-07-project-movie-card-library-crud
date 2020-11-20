import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <header className="movie-card-header">
          <img alt="Movie Cover" src={imagePath} />
          <p>{title}</p>
        </header>
        <main className="movie-card-content">
          <p>{storyline}</p>
        </main>
        <footer className="movie-card-actions">
          <span>
            <Link to={`/movies/${id}`}>VER DETALHES</Link>
          </span>
        </footer>
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
  }).isRequired,
};

export default MovieCard;
