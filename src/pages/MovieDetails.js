import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.requireMovie = this.requireMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);

    this.state = {
      movie: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.requireMovie(id);
  }

  async requireMovie(id) {
    const movie = await movieAPI.getMovie(id);

    this.setState({
      movie,
      loading: false,
    });
  }

  async removeMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    if (this.state.loading) return <Loading />;
    const { id } = this.props.match.params;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`Title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={this.removeMovie}>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
