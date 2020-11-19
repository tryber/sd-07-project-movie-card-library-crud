import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePhath } } = this.props;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <h4>{storyline}</h4>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
