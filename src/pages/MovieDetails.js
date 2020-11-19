import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      movie: {},
    };
  }
  fetchMovie = async () => {
    const movie = await movieAPI.getMovie(this.props.match.params.id); // a movieAPI ja  passaa pra int o parametro id
    this.setState({
      loaded: true,
      movie: movie,
    });
  };
  componentDidMount() {
    this.setState(
      {
        loaded: false,
      },
      this.fetchMovie,
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (!this.state.loaded) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <h2>{title}</h2>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
