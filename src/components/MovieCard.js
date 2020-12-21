import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { movie } = this.props
    return (
      <div data-testid="movie-card">  
      <h1>{movie.title}</h1>
    <h2>{ movie.storyline}</h2>
      <img src={movie.imagePath}/>
      <Link to={movie.id}>Ver detalhes</Link>
      </div>
    );
  }
}



export default MovieCard;
