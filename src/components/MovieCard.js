import React from 'react';
import { Link }  from 'react-router-dom';


class MovieCard extends React.Component {
  render() {
   const { id, title,storyline, imagePath } = this.props.movie

  return (
      <div data-testid="movie-card">
        Movie Card
        <div>
        <img src={imagePath} alt="Movie" />
        <p>{title}</p>
        <p>{storyline}</p>


        </div>
  <Link to={`/movies/${id}`} >VER DETALHES</Link>
     
      </div>
    );
  }
}


     
export default MovieCard;
