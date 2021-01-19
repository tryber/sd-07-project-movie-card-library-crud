import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      Loading: false,
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getSnapshotBeforeUpdate(id);
  }

  async get(id) {
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, Loading: true })
  }

  async deleteMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {

    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle
    } = this.state.movie;
    const loading = this.state.loading;
    return loading ? (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button onClick={() => this.deleteMovie(id)}>
          <link to="/">DELETAR</link>
        </button>
      </div>
    ) : (
        <Loading />
      );
  }
}

MovieDetails.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default MovieDetails;
