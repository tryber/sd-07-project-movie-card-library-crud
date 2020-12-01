import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { imagePath, storyline, title, id} = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt='imagem de um filme' />
        <header>{title}</header>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
