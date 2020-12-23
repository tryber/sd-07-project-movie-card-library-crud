import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, imagePath } = this.props.movie

    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <img src={imagePath} alt={`Capa do filme ${title}`}></img>
        <h5>{storyline}</h5>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}
export default MovieCard;
