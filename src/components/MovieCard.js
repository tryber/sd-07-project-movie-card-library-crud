import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // console.log(this.props); // para ver oq está chegando, vê no console.log

    // const movie = this.props

    // dá pra fazer desse jeito
    const {
      id,
      title,
      storyline,
      subtitle,
      rating,
      imagePath,
    } = this.props.movie;

    return (
      <div data-testid="movie-card">
        Movie Card
        <img src={imagePath} alt="Imagem dos filmes" />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <p>{rating}</p>
        <p>
          <Link to={`movies/${id}`}>VER DETALHES</Link>
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
