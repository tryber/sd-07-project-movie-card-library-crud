import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: false,
    };
    this.atualizar = this.atualizar.bind(this);
  }

  componentDidMount() {
    const passar = this.props.match.params;
    const id = passar.id;
    this.atualizar(id);
  }

  async atualizar(id) {
    // somente um filme nessa funçao
    const res = await movieAPI.getMovie(id);
    this.setState({ movie: res, loading: true });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;
    // <Link to={`/movies/${this.state.movie.id}/edit`}>EDITAR</Link>
    // aqui vai ser direcionado para o MovirForm

    return this.state.loading ? (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${this.state.movie.id}/edit`}>EDITAR</Link>
      </div>
    ) : (
      <Loading />
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.element.isRequired,
};

export default MovieDetails;
