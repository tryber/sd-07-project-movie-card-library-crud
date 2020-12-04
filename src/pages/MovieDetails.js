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
      loading: true,
    };
  }

  async getMovie(movieId) {
    const movieData = await movieAPI.getMovie(movieId);
    this.setState({ movie: movieData, loading: false });
  }

  componentDidMount() {
    const { movieId } = this.props.location.state;
    this.getMovie(movieId);
  }
  render() {
    const { movie: { title, storyline, imagePath, genre, rating, subtitle } , loading } = this.state;
    if (!loading) {
      return (
        <div data-testid="movie-details">
          <div>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Title: ${title}`}</p>
          </div>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div>
            <Link to={`/movies/${title}/edit`}>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        </div>
      );
    } return <Loading />;
    
  }
}

MovieDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      movieId: PropTypes.number.isRequired,
    }).isRequired,
  })
};

export default MovieDetails;
