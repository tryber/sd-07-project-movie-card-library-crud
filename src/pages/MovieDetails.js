import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchFromMovieAPI = this.fetchFromMovieAPI.bind(this);
    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchFromMovieAPI(id);
  }

  fetchFromMovieAPI(id) {
    this.setState({ loading: true }, async () => {
      const response = await movieAPI.getMovie(id);
      if (response) this.setState({ movie: response, loading: false });
    });
  }

  async deleteMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    const { loading, movie } = this.state;
    const { id, title, subtitle, storyline, imagePath, genre, rating } = movie;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`} >EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <button onClick={() => this.deleteMovie(id)}>
          <Link to="/">DELETAR</Link>
        </button>
      </div>
    );
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
