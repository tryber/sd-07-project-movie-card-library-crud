import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">
            {title}
          </h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Link className="link-movie-card" to={`/movies/${id}`}>
            <Route>
              <MovieDetails id={id} />
            </Route>
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf.isRequired,
};

export default MovieCard;
