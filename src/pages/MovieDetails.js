import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movie: [],
    }
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState(
      async () => {
        const { location } = this.props;
        const id = location.pathname.slice(-1);
        const response = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: response,
        });
      },
    );
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loading) {
      return (<Loading />);
    } else {
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={{ pathname: '/', }}>
        VOLTAR
        </Link>
        <Link to={{ pathname: `/movies/${id}/edit`, id, }}>
        EDITAR
        </Link>
      </div>
    );
    }
  }
}

export default MovieDetails;
