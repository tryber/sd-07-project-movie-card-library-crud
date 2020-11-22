import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: false,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.mapMovie = this.mapMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState({
      loading: true,
    }, async () => {
      const { id } = this.props.match.params;
      const returnedMovie = await movieAPI.getMovie(id);
      this.setState(() => ({
        movie: returnedMovie,
        loading: false,
      }));
    });
  }

  mapMovie() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

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

  render() {
    const { loading } = this.state;
    return (
      <div>{loading ? <Loading /> : this.mapMovie()}</div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string.isRequired,
};

export default MovieDetails;
