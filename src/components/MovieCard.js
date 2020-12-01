import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { id, title, imagePath, storyline } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={{ pathname: `/movies/${id}` }}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};


export default MovieCard;
