import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }
  componentDidMount() {
    this.fetchMovie();
  }
  async fetchMovie() {
    const movieId = this.props.match.params.id;
    const requestReturn = await movieAPI.getMovie(movieId);
    this.setState({
      loading: false,
      movies: requestReturn,
    });
  }
  
  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movies;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`Title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link></div>
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieDetails;
