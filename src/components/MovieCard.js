import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img src={movie.imagePath} alt="" />
          <h2>{movie.title}</h2>
        </div>
        <div>
          <p>{movie.storyline}</p>
          <Link to=""><p>Ver detalhes</p></Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({}).isRequired,
};

export default MovieCard;
