import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };

    this.loadingMovie = this.loadingMovie.bind(this);
  }

  componentDidMount() {
    this.loadingMovie();
  }

  async loadingMovie() {
    const { id } = this.props.match.params;
    this.setState({ loading: true },
      async () => {
        const { getMovie } = movieAPI;
        const movie = await getMovie(id);
        this.setState({
          movie,
          loading: false,
        });
      });
  }
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    if (this.state.loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <h3>{`Title: ${title}`}</h3>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`} >EDITAR</Link>
          <Link to="/" >VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default MovieDetails;
