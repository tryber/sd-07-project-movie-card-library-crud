import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.get = this.get.bind(this);
    this.state = {
      movie: {},
      loading: false,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.get(id);
  }

  async get(id) {
    this.setState({ loading: true }, async () => {
      const movies = await movieAPI.getMovie(id);
      this.setState({ movie: movies, loading: false });
    });
  }

  async removeMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
  }
  render() {
    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = this.state.movie;

    return this.state.loading ? (
      <Loading />
    ) : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <button onClick={() => this.removeMovie(id)}>
          <Link to="/">DELETAR</Link>
        </button>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
