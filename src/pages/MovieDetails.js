import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

import './MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };

    this.loadingMovie = this.loadingMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.loadingMovie();
  }

  async loadingMovie() {
    const { id } = this.props.match.params;
    const { getMovie } = movieAPI;
    const movie = await getMovie(id);

    this.setState({
      movie,
      loading: false,
    });
  }

  deleteMovie(id) {
    const { deleteMovie } = movieAPI;
    this.setState(async () => {
      await deleteMovie(id);
    }, () => {
      this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    if (this.state.loading) return <Loading />;

    if (this.state.shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details" className="movie-card-details">
        <img className="movie-card-details-image" alt="Movie Cover" src={`../${imagePath}`} />
        <h2 className="movie-card-details-title">{`${title}`}</h2>
        <div className="movie-card-details-body">
          <h3 className="movie-card-details-subtitle">{`${subtitle}`}</h3>
          <p className="movie-card-details-storyline">{`${storyline}`}</p>
          <p className="movie-card-details-genre">{`Genre: ${genre}`}</p>
          <p className="movie-card-details-rating">{`Rating: ${rating}`}&#9733;</p>
        </div>
        <div className="movie-card-details-buttons">
          <Link className="movie-card-details-button" to="/" >VOLTAR</Link>
          <Link className="movie-card-details-button" to={`/movies/${id}/edit`} >EDITAR</Link>
          <Link
            className="movie-card-details-button delete"
            to=""
            onClick={(event) => {
              event.preventDefault();
              this.deleteMovie(id);
            }}
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
