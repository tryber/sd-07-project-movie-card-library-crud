import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      isLoading: true,
      movie: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true }, async () => {
      const returnedMovie = await movieAPI.getMovie(id);
      this.setState({
        isLoading: false,
        movie: returnedMovie,
      });
    });
  }

  handleDelete() {
    const { movie } = this.state;
    movieAPI.deleteMovie(movie.id).then(({ status }) => {
      console.log(status);
      if (status === 'OK') {
        this.setState({ shouldRedirect: status });
      }
    });
  }

  renderMovie() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    return (
      <div>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`} >EDITAR</Link>
          <Link to={'/'} >VOLTAR</Link>
          <a href="http://localhost/" onClick={this.handleDelete}>DELETAR</a>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, shouldRedirect } = this.state;
    if (shouldRedirect === 'OK') {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div data-testid="movie-details">
        {isLoading ? <Loading /> : this.renderMovie()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.string }).isRequired,
};

export default MovieDetails;
