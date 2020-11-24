import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

  render() {
    const { id, title, storyline } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <h4>{storyline}</h4>
        <span><Link to={`movies/${id}`}>VER DETALHES</Link></span>
      </div>
    );
  }
}

export default MovieCard;
