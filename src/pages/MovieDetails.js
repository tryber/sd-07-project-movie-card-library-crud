import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.callAPI = this.callAPI.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  async deleteMovie() {
    const { id } = this.state.movie;

    await movieAPI.deleteMovie(id);
  }

  callAPI() {
    const { id } = this.props.match.params;

    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  render() {
    const { loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <h1>{`Title: ${title}`}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button><Link to="/">VOLTAR</Link></button>
        <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
        <button><Link to="/" onClick={this.deleteMovie}>DELETAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
