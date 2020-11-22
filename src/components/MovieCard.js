import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline } = this.props.movie;
    const name = `/movies/${id}`;
        
    return (
      <div data-testid="movie-card">
        <header>{title}</header>
        <p>{storyline}</p> <br />
        <Link to={{pathname: name}}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
