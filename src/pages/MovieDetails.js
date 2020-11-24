import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.renderValidReturn = this.renderValidReturn.bind(this);
    this.state = {
      loading: true,
      movie: '',
      status: '',
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState({ loading: true }, async () => {
      const idMovie = this.props.match.params.id;
      const dataRequest = await movieAPI.getMovie(idMovie);
      this.setState({ movie: dataRequest, loading: false });
    });
  }

  async deleteMovie() {
    const idMovieDelete = this.props.match.params.id;
    const dataRequestDelete = await movieAPI.deleteMovie(idMovieDelete);
    return dataRequestDelete;
  }

  renderValidReturn() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <div>
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <span>{`Rating: ${rating}`}</span>
        </div>
        <div className="movie-details">
          <Link to={`./${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={this.deleteMovie}>DELETAR</Link>
        </div>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;

    return (
      <div data-testid="movie-details">
        { !movie ? <Loading /> : this.renderValidReturn() }
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
