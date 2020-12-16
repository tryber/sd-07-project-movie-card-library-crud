import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    
    return (
    <div data-testid="movie-card">
        Movie Card
        <div>
          <img src={this.props.movie.imagePath} alt="Movie" />
          <p>{this.props.movie.title}</p>
          <p>{this.props.movie.storyline}</p>


        </div>
        <Link to={`/movies/${this.props.movie.id}`} >VER DETALHES</Link>
     </div>
  );
  }
}

export default MovieCard;
