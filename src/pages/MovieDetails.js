import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      movie: {},
      loading: false,
    };
    this.getMovie = this.getMovie.bind(this);
    // this.deletMovie = this.deletMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }
  // componentWillUnmount() {
  //   this.deletMovie();
  // }


  getMovie() {
    this.setState({ loading: true }, async () => {
      const pegamovie = await movieAPI.getMovies();
      const id = this.props.match.params.id;
      const aMovie = pegamovie.find((getAMovie) => getAMovie.id === parseInt(id, 10));
      this.setState({ loading: false, movies: pegamovie, movie: aMovie });
    });
  }

  // deletMovie(idDelete) {
  //   this.setState({ loading: true }, async () => {
  //     const pegamovie = await movieAPI.deleteMovie(idDelete);
  //     this.setState({ loading: false, movie: aMovie });
  //   });
  // }

  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div className="movie-card-details">
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <div>
              <Link className="link-movie-card" to={`/movies/${id}/edit`}>
                EDITAR
              </Link>
              <Link className="link-movie-card" to="/">
                VOLTAR
              </Link>
              <Link to="/">
                <button className="link-movie-card">DELETAR</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.arrayOf.isRequired,
};

export default MovieDetails;
