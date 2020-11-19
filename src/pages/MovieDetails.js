import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((res) => {
        console.log(this.props)
        this.setState({ movie: res, loading: false });
      });
  }

  render() {
    if (this.state.loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h3>{`Title: ${title}`}</h3>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button><Link to="/" >VOLTAR</Link></button>
        <button><Link to={`/movies/${id}/edit`} >EDITAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    })
  }).isRequired,
};

export default MovieDetails;
