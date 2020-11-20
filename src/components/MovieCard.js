import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../styles/Button';

import { MovieCardWrapper } from '../styles/MovieCard';

class MovieCard extends React.Component {
  render() {
    const {
      title,
      storyline,
      id,
    } = this.props.movie;

    return (
      <MovieCardWrapper data-testid="movie-card">
        <h1>{title}</h1>
        <p>{storyline}</p>

        <Button>
          <Link to={`/movies/${id}`}>
            VER DETALHES
        </Link>
        </Button>
      </MovieCardWrapper>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
