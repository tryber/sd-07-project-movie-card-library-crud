import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovies = this.fetchMovies.bind(this);

    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovies(id);
  }

  async fetchMovies() {
    this.setState(
      { loading: true },
      async () => {
        const id = this.props.match.params.id;
        const requestReturn = await movieAPI.getMovie(id);
        this.setState({
          movie: requestReturn,
          loading: false,
        });
      },
    );
  }

  async deleteMovie() {
    const { id } = this.props.match.params;
    if (await movieAPI.deleteMovie(id) === 'OK') {
      this.setState({
        shouldRedirect: true,
      });
    }
  }

  render() {
    const { loading, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <p>{loading ? <Loading /> : this.fetchMovies}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link onClick={() => this.deleteMovie()} to="/">DELETAR</Link>
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
