import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
// import './pages.css';

class MovieDetails extends Component {

  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
      id: 0,
      shouldRedirect: false,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id)
      .then((response) => this.setState({ movie: response, loading: false, id }));
    });
  }

  deleteMovie() {
    const { id } = this.props.match.params;
    this.setState({ loading: true, shouldRedirect: false }, () => {
      movieAPI.deleteMovie(id)
      .then(() => this.setState({ shouldRedirect: true, loading: false }));
    });
  }

  render() {
    const { loading, id, shouldRedirect, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) return <Loading />;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="movie-details">
        <div><h1>Movie Details</h1></div>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <div>
            <Link to={`/movies/${id}/edit`} className="edit">EDITAR</Link>
          </div>
          <div>
            <Link to="/" className="return">VOLTAR</Link>
          </div>
          <div>
            <a onClick={this.deleteMovie} href="/">DELETAR</a>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
