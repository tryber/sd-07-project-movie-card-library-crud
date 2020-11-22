import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline, imagePath } = movie;
    return (
      <section data-testid="movie-card">
        <img alt="Movie Cover" className="card-image" src={imagePath} />
        <div className="info">
          <h4>{title}</h4>
          <h5 className="movie-card-storyline">{storyline}</h5>
        </div>
        <hr />
        <Link to={`/movies/${id}`} className="red">VER DETALHES</Link>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
