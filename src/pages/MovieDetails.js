import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.findMovie = this.findMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.findMovie();
  }

  async deleteMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  async findMovie() {
    const { id } = this.props.match.params;
    this.setState({ id });
    const movieById = await movieAPI.getMovie(id);
    this.setState({
      movie: movieById,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (this.state.loading) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div>
          <Link to={`/movies/${this.state.id}/edit`}>EDITAR</Link>
          <Link to={'/'}>VOLTAR</Link>
        </div>
        <button href="http://localhost/" onClick={this.deleteMovie}>DELETAR</button>
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.func.isRequired };

export default MovieDetails;
