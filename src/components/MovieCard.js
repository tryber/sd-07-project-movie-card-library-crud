import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const p = this.props
    const { title, storyline, id } = p.movie;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
