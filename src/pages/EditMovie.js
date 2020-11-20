import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      status: 'loading',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // aperta no editar dentro de ver detalhes e  passa por essa pagina
    // essa pagina redireciona os dados direto para o forms
    // os dados seroa  do filme capturado pelo id

    // é renderizado primeiro o loading depois o DiMount
    // ai eu capturo o id que foi carregado do MovieDetails
    // Jogo o id na getMovie , capturo o filme
    // renderizo o forms e depois de preenchido e submetido eu chamo a handleSubmit
  }

  componentDidMount() {
    const passar = this.props.match.params;
    const id = passar.id;
    this.atualizar(id);
  }

  async atualizar(id) {
    const filme = await movieAPI.getMovie(id);
    this.setState({ movie: filme, status: '' });
    // atualiza o filme de acordo com o id que está selecionado a partir
    // das props
  }

  async handleSubmit(updatedMovie) {
    // o botao passa atualizado do movieform, obrigado focosi
    const movieAtualizado = await movieAPI.updateMovie(updatedMovie);
    this.setState({ movie: movieAtualizado, shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // se for verdadeiro
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.element.isRequired,
};

export default EditMovie;
