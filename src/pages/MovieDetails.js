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
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <hr />
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={() => this.deleteMovie(id)}>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
