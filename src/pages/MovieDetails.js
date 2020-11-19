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
      loadingMovie: false,
    };
    this.functionStateChanger = this.functionStateChanger.bind(this);
  }

  componentDidMount() {
    const movieID = this.props.match.params.id;
    this.functionStateChanger(movieID);
  }

  async functionStateChanger(id) {
    this.setState({
      loadingMovie: true,
    });

    this.setState({
      movie: await movieAPI.getMovie(id),
      loadingMovie: false,
    });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    if (this.state.loadingMovie) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
