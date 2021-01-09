import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: false,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then(((movie) => {
      this.setState({
        movie,
        loading: true,
      })
    }))
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { loading } = this.state;
    
    if (!loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
