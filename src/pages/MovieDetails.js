import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      movie: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const theMovie = async (id) => {
      const movie = await movieAPI.getMovie(id);
      this.setState({ movie });
    };
    const { id } = this.props.match.params;
    theMovie(id);
  }
  handleClick() {
    const { movie: { id } } = this.state;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { shouldRedirect } = this.state;
    // Change the condition to check the state
    if (shouldRedirect) {
      // Redirect
      return <Redirect to={'/'} />;
    }
    if (this.state.movie.length <= 0) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <span><Link to={`/movies/${id}/edit`}>EDITAR</Link></span>
        <Link to="/" onClick={this.handleClick}>DELETAR</Link>
        <span><Link to={'/'}>VOLTAR</Link></span>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
