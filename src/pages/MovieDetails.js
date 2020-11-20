import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      movie: {},
      loading: false,
    };
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    this.setState({ loading: true }, async () => {
      const pegamovie = await movieAPI.getMovies();
      const id = this.props.match.params.id;
      const aMovie = pegamovie.find((getAMovie) => getAMovie.id === parseInt(id, 10));
      this.setState({ loading: false, movies: pegamovie, movie: aMovie });
    });
  }

  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <div>
              <Link className="link-movie-card" to={`/movies/${id}/edit`}>
                EDITAR
              </Link>
              <Link className="link-movie-card" to="/">
                VOLTAR
              </Link>
              <button className="link-movie-card" onClick={movieAPI.deleteMovie}>DELETAR</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default MovieDetails;
