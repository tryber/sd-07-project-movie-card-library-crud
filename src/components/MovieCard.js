import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const linkAdress = `movies/:${movie.id}`;
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt="" />
        <h3>{movie.title}</h3>
        <p>{movie.storyline}</p>
        <Link
          to={{
            pathname: linkAdress,
            aboutProps: {
              movie: movie.id,
            },
          }}
        >
          VER DETALHES
        </Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({}),
};
MovieCard.defaultProps = {
  movie: PropTypes.shape({}),
};
