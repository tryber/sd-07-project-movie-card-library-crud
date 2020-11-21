import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

// esse componente mostra detalhes de 1 movie específico a partir de seu id
class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
    this.toFetch = this.toFetch.bind(this);
  }

  componentDidMount() {
    this.toFetch();
  }

  toFetch() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => this.setState({
      movie,
      loading: false,
    }));
  }
  /* dentro do this.props tem history, location e match.
  Dentro do match tem params com o id chamado, path e url */

  render() {
    if (this.state.loading) return <Loading />;

    const { id, title, subtitle, storyline, imagePath, genre, rating } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img src={`../${imagePath}`} alt="Movie Cover" />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
