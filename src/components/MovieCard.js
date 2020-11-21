import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    // Ao adicionar propTypes remover prop
    const prop = this.props;
    const { id, storyline, title } = prop.movie;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <h5>{storyline}</h5>
        <Link to={`/movies/${id}`} >VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
