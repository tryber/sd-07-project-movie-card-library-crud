import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { deleteMovie } from '../services/movieAPI';

export default class Info extends Component {
  constructor(props) {
    super(props);

    this.deleteCard = this.deleteCard.bind(this);
  }

  async deleteCard() {
    const idMovie = this.props.id;
    return deleteMovie(idMovie);
  }

  render() {
    const { imagePath, subtitle, title, storyline, genre, rating } = this.props.movie;
    const { id } = this.props;
    console.log(this.props.movie);

    return (
      <div>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{title}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to={'/'} onClick={this.deleteCard}>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
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
