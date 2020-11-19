import React from 'react';
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    let {title, storyline, id} = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
