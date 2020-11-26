import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    const name = `/movies/${id}`;
    return (
      <div data-testid="movie-card" className="movie-card">
        <header className="title-card">{title}</header>
        <img src={imagePath} alt={title} className="img-card" />
        <p className="text-card">{storyline}</p> <br />
        <hr />
        <Link to={{ pathname: name }} className="text-link">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  storyline: PropTypes.string,
}.isRequired;

export default MovieCard;
