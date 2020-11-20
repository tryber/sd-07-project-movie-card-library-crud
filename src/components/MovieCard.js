import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const link = '/movies/'.concat(movie.id);
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt="" />
        <div>{ movie.title }</div>
        <div>{ movie.storyline }</div>
        <Link to={link}>VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = { movie: PropTypes.shape().isRequired };

export default MovieCard;
