import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState({ loading: true }, async () => {
      const { match: { params: { id } } } = this.props;
      const movie = await movieAPI.getMovie(id);
      this.setState({ movie, loading: false, id });
    });
  }

  deleteMovie(id) {
    return movieAPI.deleteMovie(id);
  }

  renderData() {
    const { movie, id } = this.state;

    return (
      <div>
        <img alt="Movie Cover" src={`../${movie.imagePath}`} />
        <h2>{movie.title}</h2>
        <p>{`Subtitle: ${movie.subtitle}`}</p>
        <p>{`Storyline: ${movie.storyline}`}</p>
        <p>{`Genre: ${movie.genre}`}</p>
        <p>{`Rating: ${movie.rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <br />
        <Link to="/">VOLTAR</Link>
        <br />
        <Link to="/" onClick={() => this.deleteMovie(id)}>DELETAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.renderData()}
      </div>
    );
  }
}

export default MovieDetails;
