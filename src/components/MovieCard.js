import React from 'react';
import { Link } from 'react-router-dom';
class MovieCard extends React.Component {
  render() {
    const link = `/movies/${this.props.movie.id}`
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>Título: {this.props.key}</p>
        <p>Sinopse: {this.props.movie.storyline}</p>
        <Link to={link}>VER DETALHES</Link>"
      </div>

      // Todos os MovieCards devem possuir em seu conteúdo, pelo menos, o título,
      //       a sinopse e um link com o texto "VER DETALHES" que aponta para a rota
      //     movies /: id, onde : id é o id do filme.Esta rota exibirá informações
      //     detalhadas de um filme.
    );
  }
}

export default MovieCard;
