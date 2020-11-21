import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loadingMsg: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const response = await movieAPI.getMovie(id);
    this.setState({
      movie: response,
      loadingMsg: false,
    });
  }

  async deleteMovie(id) {
    this.setState({ loadingMsg: true });
    await movieAPI.deleteMovie(id);
  }

  render() {
    if (this.state.loadingMsg === true) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    return (
      <div className="movie-details-container">
        <div data-testid="movie-details" className="movie-details">
          <img className="movie-card-image" alt="Movie Cover" src={`../${imagePath}`} />
          <p className="details-movie-text">{`Title: ${title}`}</p>
          <p className="details-movie-text">{`Subtitle: ${subtitle}`}</p>
          <p className="details-movie-text">{`Storyline: ${storyline}`}</p>
          <p className="details-movie-text">{`Genre: ${genre}`}</p>
          <p className="details-movie-text">{`Rating: ${rating}`}</p>
          <div className="links-div">
            <Link className="link" to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link className="link" to="/" onClick={() => this.deleteMovie(id)}>DELETAR</Link>
            <Link className="link" to="/">VOLTAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
