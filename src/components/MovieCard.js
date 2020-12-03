import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    //console.log(movie);
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>
          {movie.storyline}
        </p>
        <Link to={{ pathname: `/movies/${movie.id}`}}>
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;
