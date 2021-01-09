import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { name, storyline } } = this.props;
    return (
      <div data-testid="movie-card">
        <header>
          <h1>Movie Card</h1>
        </header>
        <div>
          <h2>{name}</h2>
          <p>{storyline}</p>
        </div>
        <Link to={`movies/${id}`}>Ver detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
