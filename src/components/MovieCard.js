import React from 'react';
import { withRouter } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    console.log(this.props);
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <button
          className="button-showDetails"
          onClick={() => this.props.history.push("/movies/:id")}
        >
          VER DETALHES
        </button>
      </div>
    );
  }
}

export default MovieCard;
