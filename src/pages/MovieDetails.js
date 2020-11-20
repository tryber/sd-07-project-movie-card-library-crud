import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movieData = await movieAPI.getMovie(id);
    this.setState({ movie: movieData, isLoading: false });
  }
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (this.state.isLoading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details">
        <p>{`Title: ${title}`}</p>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;
