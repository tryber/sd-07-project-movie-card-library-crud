import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const movieInfo = this.props.movie;
    const {title, storyline, id, } = movieInfo;
    return (
      <div data-testid="movie-card">
        <div className="movie-card">
          <div className="movie-card-body">
            <h4 data-testid="movie-card-title" className="movie-card-title">
              {title}
            </h4>
            <h5 className="movie-card-storyline">{storyline}</h5>
            <Link to={"/movies/" + id}>VER DETALHES</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
