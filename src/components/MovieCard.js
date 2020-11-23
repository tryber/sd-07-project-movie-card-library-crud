import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, imagePath } = this.props.movie;
    const { onClick } = this.props;

    const movieDetailsUrl = `/movies/${id}`;

    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="Movie" />
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
        <Link to={movieDetailsUrl} onClick={onClick}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = ({
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
  onClick: PropTypes.func,
}).isRequired;

export default MovieCard;
