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
    this.loading = this.getDetails.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await movieAPI.getMovie(id);
    this.getDetails(response);
  }

  getDetails(details) {
    this.setState({ movie: details, loading: false });
  }

  render() {
    // Change the condition to check the state
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    if (this.state.loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
        <button><Link to={'/'}>VOLTAR</Link></button>
      </div>
    );
  }
}

export default MovieDetails;
