import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movie:[],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  fetchMovie(id) {
    movieAPI.getMovie(id).then((movie) => this.setState({
      movie,
      loading: false,
    }));
  }
  render() {
    const { id } = this.props.match.params;
    const { movie, loading } = this.state;
    const { storyline, imagePath, genre, rating, title, subtitle } = movie;
    if( loading) return <Loading />
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtítulo: ${subtitle}`}</p>
        <p>{`Sinopse: ${storyline}`}</p>
        <p>{`Gênero: ${genre}`}</p>
        <p>{`Avaliação: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>&nbsp;&nbsp;
        <Link to={`/`}>VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
