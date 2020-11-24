import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storeline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img alt="movie" src={imagePath} />
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{storeline}</p>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storeline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
