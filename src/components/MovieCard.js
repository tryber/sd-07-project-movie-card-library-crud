import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const link = `/movies/${this.props.movie.id}`
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>Título: {this.props.movie.title}</p>
        <p>Sinopse: {this.props.movie.storyline}</p>
        <Link to={link}>VER DETALHES</Link>"
      </div>
    );
  }
}

export default MovieCard;
