import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../App.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const idMovie = this.props.match.params.id;
    this.fetchMovie(idMovie);
  }

  async fetchMovie(id) {
    const response = await movieAPI.getMovie(id);
    this.setState({ movie: response });
  }

  async delet(id) {
    await movieAPI.deleteMovie(id);
  }
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;

    return (
      <div data-testid="movie-details">
        {Object.entries(this.state.movie).length === 0 ? (
          <Loading />
        ) : (
          <div>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <h1>{title}</h1>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <button>
              <Link to={`/movies/${id}/edit`} className="btn-details">
                EDITAR
              </Link>
            </button>
            <button>
              <Link to="/" className="btn-details">
                VOLTAR
              </Link>
            </button>
            <button onClick={() => this.delet(id)}>
              <Link to="/">DELETAR </Link>
            </button>
          </div>
        )}
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
