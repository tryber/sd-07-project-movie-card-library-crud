import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchs = this.fetchs.bind(this);
    this.state = {
      carregando: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchs();
  }

  async fetchs() {
    const movie = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      movies: movie,
      carregando: false,
    });
  }

  render() {
    const { carregando } = this.state;
    const {
      title, storyline, imagePath, genre, rating, subtitle,
    } = this.state.movies;
    return carregando ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
export default MovieDetails;
