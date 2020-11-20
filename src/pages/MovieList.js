import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    this.setState({ loading: true }, async () => {
      const reqs = await movieAPI.getMovies();
      this.setState({ movies: reqs, loading: false });
    });
  }

  renderMovies() {
    const { movies } = this.state;
    return movies.map((movie) => <MovieCard key={movie.title} movie={movie} />);
  }

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {this.renderMovies()}
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
