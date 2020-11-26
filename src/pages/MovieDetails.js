import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor() {
    super();
    this.getMovie = this.getMovie.bind(this);
    this.state = {
      resultDetails: {},
      loaded: false,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.getMovie(id)
  }

  async getMovie(movieId) {
    const resultDetails = await movieAPI.getMovie(movieId)
    this.setState({ resultDetails, loaded: true })
  }

  render() {
    const { loaded, resultDetails } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = resultDetails;
    if (loaded) {
      return (
        <div data-testid="movie-details">
          <p>{`Title: ${title}`}</p>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to="/">VOLTAR</Link>
          <br/>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </div>
      );
    } return <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
