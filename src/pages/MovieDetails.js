import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
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
    this.deletar = this.deletar.bind(this);
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

  async deletar(id) {
    await movieAPI.deleteMovie(id);
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
      id,
    } = this.state.movie;
    // <Link to={`/movies/${this.state.movie.id}/edit`}>EDITAR</Link>
    // aqui vai ser direcionado para o MovirForm
    // if (this.state.delete) return <Redirect to='/'/>
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
        <button onClick={() => this.deletar(id)}>
          <Link to="/">DELETAR</Link>
        </button>
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
