import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const movieInfo = this.props.movie;
    const { title, storyline, id } = movieInfo;
    const link = `/movies/${id}`
    return (
      <div data-testid="movie-card">
        <div className="movie-card">
          <div className="movie-card-body">
            <h4 data-testid="movie-card-title" className="movie-card-title">
              {title}
            </h4>
            <h5 className="movie-card-storyline">{storyline}</h5>
            <Link to={link}>VER DETALHES</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
