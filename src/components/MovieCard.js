import React from 'react';
import {Link} from 'react-router-dom'

class MovieCard extends React.Component {  
  render() {
    const { id, title, storyline} = this.props.movie;  
    return (
      <div data-testid="movie-card">
        <header>{title}</header>
        <p>{storyline}</p> <br/>
        <Link to="/movies/:`${id}`">VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
