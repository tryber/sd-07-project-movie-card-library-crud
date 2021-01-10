import React, { Component, propTypes } from 'react';
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

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then(((movie) => {
      this.setState({
        movie,
        loading: true,
      });
    }));
  }

  render() {
    const { loading } = this.state;

    if (!loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
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
    );
  }
}

MovieDetails.protoTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movie: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      storyline: propTypes.string.isRequired,
      imagePath: propTypes.string.isRequired,
      genre: propTypes.string.isRequired,
      rating: propTypes.string.isRequired,
      subtitle: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
