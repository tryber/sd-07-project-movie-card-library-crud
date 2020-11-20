import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.fetchMovieRequest = this.fetchMovieRequest.bind(this);
    this.fetchDeleteMovie = this.fetchDeleteMovie.bind(this);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovieRequest();
  }

  fetchMovieRequest() {
    const { id } = this.props.match.params;
    this.setState(
      {
        loading: true,
      },
      async () => {
        const response = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: response,
        });
      },
    );
  }

  async fetchDeleteMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading, movie } = this.state;
    const { title, subtitle, imagePath, storyline, genre, rating, id } = movie;
    return (
      <div data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h1>{title}</h1>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <div>
              <Link to={`/movies/${id}/edit`}>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <Link to="/" onClick={this.fetchDeleteMovie}>
                DELETAR
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

MovieDetails.defaultProps = {
  match: {
    params: {
      id: "",
    },
  },
};

export default MovieDetails;
