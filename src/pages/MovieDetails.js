import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movies: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState({ loading: true },
      async () => {
        const movies = await movieAPI.getMovie(this.props.match.params.id);
        this.setState({
          movies,
          loading: false,
        });
      });
  }
  render() {
    // Change the condition to check the state
    if (this.state.loading) return <Loading />;

    const { title,
            storyline,
            imagePath,
            genre,
            rating,
            subtitle,
            id,
          } = this.state.movies;

    return (
      <div className="movie-card" data-testid="movie-details">
        <img className="movie-card-image" alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/"><button>VOLTAR</button></Link>
        <Link to={`/movies/${id}/edit`}><button>EDITAR</button></Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MovieDetails;
