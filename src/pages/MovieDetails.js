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
      loading: true,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
    this.requestApiMovie = this.requestApiMovie.bind(this);
  }

  async componentDidMount() {
    this.requestApiMovie();
  }

  async requestApiMovie() {
    const { id } = this.props.match.params;
    this.setState({
      loading: false,
      movie: await movieAPI.getMovie(id),
    });
  }

  deleteMovie() {
    const { id } = this.props.match.params;
    return movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div className="movie-list" >
        <div data-testid="movie-details" className="movie-card" >
          <img alt="Movie Cover" src={`../${imagePath}`} className="movie-card-image" />
          <div className="movie-card-body">
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
          </div>
          <div className="movie-card-rating">
            <Link to={`/movies/${id}/edit`} className="movie-card-link" >EDITAR</Link>
            <Link to="/" className="movie-card-link" >VOLTAR</Link>
            <Link to="/" className="movie-card-link" onClick={this.deleteMovie} >DELETAR</Link>
          </div>
        </div>
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
