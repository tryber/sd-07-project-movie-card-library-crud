import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      bookmarked,
      genre,
      id,
      imagePath,
      rating,
      storyline,
      subtitle,
      title
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
