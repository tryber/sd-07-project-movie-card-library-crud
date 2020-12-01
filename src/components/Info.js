import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Info(props) {
  const { imagePath, subtitle, title, storyline, genre, rating } = props.movie;
  const { id } = props;
  return (
    <div>
      <img alt="Movie Cover" src={`../${imagePath}`} />
      <h1>{title}</h1>
      <p>{`Subtitle: ${subtitle}`}</p>
      <p>{`Storyline: ${storyline}`}</p>
      <p>{`Genre: ${genre}`}</p>
      <p>{`Rating: ${rating}`}</p>
      <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      <Link to="/">VOLTAR</Link>
    </div>
  );
}

Info.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  id: PropTypes.number.isRequired,
};
