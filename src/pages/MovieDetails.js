import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.state = {
      movie: [],
      loading: false,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }

  async fetchMovie(id) {
    this.setState({ loading: true }, async () => {
      const movieReturn = await movieAPI.getMovie(id);
      this.setState({
        movie: movieReturn,
        loading: false,
      });
    });
  }

  async deleteMovie(movie) {
    const resolve = await movieAPI.deleteMovie(movie);
    if (resolve === 'OK') {
      this.setState({ shouldRedirect: true });
    }
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;

    if (loading === true) {
      return (
        <div data-testid="movie-details" className="movie-details">
          <Loading />
        </div>
      );
    }

    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="movie-details">
        <div>
          <img width="100%" alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link className="links" to={`/movies/${id}/edit`}>
            EDITAR
          </Link>
          <Link className="links" to="/">
            VOLTAR
          </Link>
          <Link to="/" onClick={() => this.deleteMovie(id)}>
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
