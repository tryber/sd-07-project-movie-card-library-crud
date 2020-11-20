import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const result = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({ movie: result, isLoading: false });
  }

  async handleDelete(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie } = this.state;

    if (this.state.isLoading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details" className="content">
        <img className="movie-card-image" alt="Movie Cover" src={`../${imagePath}`} />
        <p className="movie-card-title">{`Title: ${title}`}</p>
        <p className="movie-card-subitle">{`Subtitle: ${subtitle}`}</p>
        <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p className="movie-card-rating">{`Rating: ${rating}`}</p>
        <div>
          <Link className="classic-button" to="/">VOLTAR</Link>
          <Link className="classic-button" to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link
            className="classic-button" to="/" onClick={() => this.handleDelete(id)}
          >
          DELETAR
          </Link>
        </div>
      </div>

    );
  }
}

export default MovieDetails;
