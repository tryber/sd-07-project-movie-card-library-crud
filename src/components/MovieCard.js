import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { id, storyline, title } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h4>{title}</h4>
        <h5>{storyline}</h5>
        <Link to={`/movies/${id}`} >VER DETALHES</Link>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
export default MovieCard;
