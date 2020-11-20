import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.fetchMovie();
  }
  async fetchMovie() {
    const id = this.props.match.params.id;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loading: false });
  }
  render() {
    const { loading, movie } = this.state;
    // console.log(movie);
    if (loading === true) {
      return (<Loading />);
    }
    const { id, title, subtitle, storyline, imagePath, genre, rating } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
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
