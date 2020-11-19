import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import movies from '../services/movieData';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      movie: undefined,
    };
    this.deleteMovie = this.removeMovie.bind(this);
  }
  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => {
      this.setState({ movie, loaded: true });
    });
  }
  removeMovie(id) {
    console.log('deletemovie.');
    movieAPI.deleteMovie(id).then(this.setState({ shouldRedirect: true }));
  }
  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (this.state.loaded) {
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
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={'/'}>VOLTAR</Link>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link onClick={() => this.removeMovie(id)} to="/">
            DELETAR
          </Link>
        </div>
      );
    }
    return <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieDetails;
