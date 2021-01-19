import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: {},
    };
    this.fetchMovieAPI = this.fetchMovieAPI.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovieAPI();
  }

  async deleteMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  fetchMovieAPI() {
    this.setState({
      loading: true,
    }, async () => {
      const { id } = this.props.match.params;
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        loading: false,
      });
    });
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

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
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
