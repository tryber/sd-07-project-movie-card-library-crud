import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h2>{title}</h2>
        <h3>{storyline}</h3>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
