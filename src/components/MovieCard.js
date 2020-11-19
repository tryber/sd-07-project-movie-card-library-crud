import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id, imagePath } = this.props.movie;
    console.log(this.props);
    return (
      <div center data-testid="movie-card">
        <h2>{title}</h2>
        <p>{storyline}</p>
        <img src={imagePath} />
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
