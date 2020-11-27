import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovie = this.fetchMovie.bind(this);
    this.movieDetail = this.movieDetail.bind(this);

    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState(
      { loading: true },
      async () => {
        const { id } = this.props.match.params;
        const allMovies = await movieAPI.getMovie(id);
        this.setState(() => ({
          loading: false,
          movie: allMovies,
        }));
      });
  }

  movieDetail() {
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

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading ? <Loading /> : this.movieDetail()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.func.isRequired,
};

export default MovieDetails;
