import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      redirect: false,
      status: 'loading',
    };
    this.deletedMovie = this.deletedMovie.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { getMovie } = movieAPI;
    getMovie(id).then((result) => this.setState({ movie: result, status: '' }));
  }

  async deletedMovie() {
    const { id } = this.props.match.params;
    this.setState({ status: 'loading' });
    await movieAPI.deleteMovie(id);
    this.setState({ redirect: true, status: '' });
  }
  render() {
    if (this.state.status === 'loading') return <Loading />;

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <button type="button" onClick={this.deletedMovie}>
            <Link to="/">DELETAR</Link>
          </button>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
