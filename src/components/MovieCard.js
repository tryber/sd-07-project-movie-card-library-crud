import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { id } } = this.props
    return (
      <div data-testid="movie-card">
        <p>{this.props.movie.title}</p>
        <p>{this.props.movie.storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
