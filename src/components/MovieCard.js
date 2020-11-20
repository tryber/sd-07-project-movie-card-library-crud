import React from 'react';
import { Link } from 'react-router-dom';


class MovieCard extends React.Component {
  render() {
    const {
      title,
      id,
      storyline,
      rating,
      imagePath,
      genre,
      subtitle,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} />
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h4>{storyline}</h4>
        <p><em>{genre}</em></p>
        <p>{rating}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
