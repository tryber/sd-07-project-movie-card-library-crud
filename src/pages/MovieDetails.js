import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      movie: '',
    };
    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  fetchMovieDetails() {
    this.setState({ loading: true }, async () => {
      const { id } = this.props.match.params;
      const movie = await movieAPI.getMovie(id);
      this.setState(() => ({
        loading: false,
        movie,
      }));
    });
  }

  async deleteMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { imagePath, title, subtitle, storyline, genre, rating } = this.state.movie;
    const { loading } = this.state;
    if (!loading) {
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
          <Link to="/" onClick={this.deleteMovie}>DELETAR</Link>
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};
