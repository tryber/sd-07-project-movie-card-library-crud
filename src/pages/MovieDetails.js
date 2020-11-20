import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
    .then((movie) => this.setState({ movie, status: 'details' }));
  }

  delete() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id)
    .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { movie, status, shouldRedirect } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`Title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/" >VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <a href="/" onClick={this.delete}>DELETAR</a>
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
