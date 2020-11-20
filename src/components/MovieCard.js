import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } = this.props.movie;


    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h3>{title}</h3>
        <p>{storyline}</p>
        <link to={`/movies/${id}`}>VER DETALHES</link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
