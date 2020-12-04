import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor() {
    super();

    this.state = {
      movie: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const fetchPromise = await movieAPI.getMovie(id);
    this.attState(fetchPromise);
  }

  attState(movie) {
    this.setState({
      movie,
      isLoading: false,
    });
  }

  movieCardDetail() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <div>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    return (
      <div>
        {this.state.isLoading === true ? <Loading /> : this.movieCardDetail()}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
