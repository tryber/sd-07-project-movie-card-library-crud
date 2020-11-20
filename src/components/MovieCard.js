import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {id, title, storyline, imagePath} = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt='Movie Cover' />
        <h3>{title}</h3>
        <h5>{storyline}</h5>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
