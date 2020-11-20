import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchHere();
  }

  fetchHere() { // para buscar a API, não precisa JSON porque não é uma http
    movieAPI.getMovies().then((movies) => this.setState({
      movies,
      loading: false,
    }));
  } // a partir do retorno da API é que se altera o estado

  render() {
    const { movies } = this.state;

    // Enquanto a API não retorna para mudar o estado, Loading é executado com a mensagem
    if (this.state.loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
