import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.sendToTrash = this.sendToTrash.bind(this);

    this.state = {
      movie: {},
      loaded: false,
      back: false,
    };
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((obj) => this.setState({ movie: obj, loaded: true }));
  }

  sendToTrash() {
    movieAPI
      .deleteMovie(this.state.movie.id)
      .then(() => this.setState({ back: true }));
  }
  render() {
    if (this.state.back) {
      return <Redirect to="/" />;
    }

    if (this.state.loaded === false) {
      return <Loading />;
    }

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      id,
    } = this.state.movie;

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
        <Link to="/" onClick={this.sendToTrash}>
          DELETAR
        </Link>
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
