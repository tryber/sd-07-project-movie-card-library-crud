import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovieDetail = this.fetchMovieDetail.bind(this);
    this.state = {
      movie: {},
      loadingDetail: false,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovieDetail(id);
  }

  async fetchMovieDetail(id) {
    this.setState(
      { loadingDetail: true },
      async () => {
        const movieFound = await movieAPI.getMovie(id);
        this.setState({
          movie: movieFound,
          loadingDetail: false,
        });
      },
    );
  }

  async deleteMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { movie, loadingDetail, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    const loadingElement = <Loading />;
    const redirectElement = <Redirect to="/" />;

    if (loadingDetail) {
      return loadingElement;
    }

    if (shouldRedirect) {
      return redirectElement;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
        <Link to={'/'} onClick={() => this.deleteMovie()}>DELETAR</Link>
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
