import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.get = this.get.bind(this);
    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.get(id);
  }

  async get(id) {
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie: movie, loading: true });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return this.state.loading ? (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    ) : (
      <Loading />
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MovieDetails;
