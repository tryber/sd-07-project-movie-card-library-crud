import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.deleteMovieId = this.deleteMovieId.bind(this);
    this.definedStateGetMovie = this.definedStateGetMovie.bind(this);

    this.state = {
      movie: undefined,
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { getMovie } = movieAPI;
    const resultRequest = await getMovie(id);
    this.definedStateGetMovie(resultRequest);
  }

  definedStateGetMovie(request) {
    this.setState({
      movie: request,
    });
  }

  async deleteMovieId() {
    const { deleteMovie } = movieAPI;
    const { id } = this.state.movie;

    await deleteMovie(id);
  }

  render() {
    const { movie } = this.state;

    if (movie === undefined) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h2>{title}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`} >EDITAR</Link>
        <Link to={'/'} >VOLTAR</Link>
        <Link
          to={'/'}
          onClick={this.deleteMovieId}
        >
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;
