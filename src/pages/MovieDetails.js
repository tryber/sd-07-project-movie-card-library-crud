import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchDetails = this.fetchDetails.bind(this);
    this.returnMovieDetails = this.returnMovieDetails.bind(this);

    this.state = {
      loadingMensage: true,
      movie: {},
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
      </div>
    );
  }

  render() {
    // Change the condition to check the state
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
