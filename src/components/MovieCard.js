import { Component } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { id, title, imagePath, storyline } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title}/>
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={ {pathname: `/movies/${id}`} } >VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
