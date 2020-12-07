import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchDetails = this.fetchDetails.bind(this);
    this.returnMovieDetails = this.returnMovieDetails.bind(this);
    this.removeMovie = this.removeMovie.bind(this);

    this.state = {
      loadingMensage: true,
      movie: {},
      removeMovie: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchDetails(id);
  }

  fetchDetails(id) {
    this.setState({
      loadingMensage: true,
    }, () => {
      movieAPI.getMovie(id).then((response) => {
        this.setState({
          loadingMensage: false,
          movie: response,
        });
      });
    });
  }

  removeMovie(id) {
    movieAPI.deleteMovie(id);
    this.setState({ removeMovie: true });
  }

  returnMovieDetails(movie) {
    const { imagePath, subtitle, storyline, genre, rating, title, id } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button type="button">
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
        <button onClick={() => this.removeMovie(id)}>
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    const { removeMovie } = this.state;
    if (removeMovie) {
      return <Redirect to="/" />;
    }
    const { loadingMensage, movie } = this.state;
    return (
      <div data-testid="movie-details">
        { loadingMensage ? <Loading /> : this.returnMovieDetails(movie) }
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
