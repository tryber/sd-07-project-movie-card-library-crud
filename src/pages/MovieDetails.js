import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() { this.fetchMovie(); }

  async fetchMovie() {
    const prop = this.props;
    const { id } = prop.match.params;
    const details = await movieAPI.getMovie(id).then((e) => e);
    this.setState({
      loading: false,
      movie: details,
    });
  }

  render() {
    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;

    return (
      this.state.loading ? <Loading /> :
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h3>{title}</h3>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`} >EDITAR</Link>
        <Link to="/" >VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
