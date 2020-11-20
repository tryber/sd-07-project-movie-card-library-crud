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
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, async () => {
      const data = await movieAPI.getMovie(id);
      // console.log(data);
      this.setState({ movie: data, loading: false });
    });
  }
  movieDelete(id) {
    movieAPI.deleteMovie(id);
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }
    // Change the condition to check the state
    const { title, id, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    const editar = `/movies/${id}/edit`;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={editar}>EDITAR</Link><br /><br />
          <Link onClick={() => (movieAPI.deleteMovie(id))} to="/">DELETAR</Link> <br /><br />
          <Link to="/">VOLTAR</Link><br /><br />
        </div>
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

export default MovieDetails;
