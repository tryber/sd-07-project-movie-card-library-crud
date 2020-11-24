import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: false,
    };
  }

  componentDidMount() {
    //   const id = this.props.match.params.id;
    //   this.get(id);
    // }
    // async get(id) {
    //   const movie = await movieAPI.getMovie(id);
    //   this.setState({ movie, loading: true });

    const getMovieId = async (id) => {
      const movieId = await movieAPI.getMovie(id);
      this.setState({
        movie: movieId,
        loading: true,
      });
    };
    const { id } = this.props.match.params;
    getMovieId(id);
  }
  render() {
    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;
    const loading = this.state.loading;
    return loading ? (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <br />
        <Link to="/">VOLTAR</Link>
      </div>
    ) : (
      <Loading />
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
