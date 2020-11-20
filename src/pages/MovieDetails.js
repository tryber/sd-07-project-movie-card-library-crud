import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.get = this.get.bind(this);
    this.delet = this.delet.bind(this);
    this.state = {
      movie: {},
      MovieDetails: false,
    };
  }
  componentDidMount() {
    const p = this.props;
    const id = p.match.params.id;
    this.get(id);
  }
  async get(id) {
    const fetch = await movieAPI.getMovie(id);
    this.setState({ movie: fetch, MovieDetails: true });
  }

  async delet(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    return (
      this.state.MovieDetails ?
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <button onClick={() => this.delet(id)}><Link to="/">DELETAR</Link></button>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div> : <Loading />
    );
  }
}

export default MovieDetails;
