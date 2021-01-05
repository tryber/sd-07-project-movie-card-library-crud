import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fechMovie = this.fechMovie.bind(this);

    this.state = {
      loaded: false,
      movie: {},
      redirect: false,
    };
  }
  componentDidMount() {
    this.fechMovie();
  }

  async fechMovie() {
    const movie = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      loaded: true,
      movie,
    });
  }

  async HandleDelete(id) {
    await movieAPI.deleteMovie(id);
  }
  render() {
    if (!this.state.loaded) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <button
          onClick={() => {
            this.HandleDelete(id);
          }}
        >
          <Link to="/">DELETAR </Link>
        </button>
      </div>
    );
  }
}

export default MovieDetails;
