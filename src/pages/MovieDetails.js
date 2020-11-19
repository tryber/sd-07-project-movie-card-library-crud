import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie }));
  }

  handleDelete() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    if (Object.keys(this.state.movie).length === 0) {
      return <Loading />;
    }

    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <header>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{title}</p>
        </header>
        <main>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </main>
        <footer>
          <span>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          </span>
          <span>
            <Link to="/">VOLTAR</Link>
          </span>
          <Link to="/" onClick={this.handleDelete}>
            DELETAR
          </Link>
        </footer>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default MovieDetails;
