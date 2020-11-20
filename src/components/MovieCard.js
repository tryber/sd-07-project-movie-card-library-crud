import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <h1> {movie.title} </h1>
          <img src={movie.imagePath} alt="Foto Filme" />
        </div>
        <div>
          <h3> {movie.subtitle} </h3>
          <p> {movie.storyline} </p>
          <span> {movie.rating} </span>
        </div>
        <Link to={`/movies/${movie.id}`}><button>VER DETALHES</button></Link>
      </div>
    );
  }
}

export default MovieCard;
