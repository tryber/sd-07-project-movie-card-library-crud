import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: props.movie,
    };
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, id } = movie;

    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
