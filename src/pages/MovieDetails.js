import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Redirect } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      done: false,
      isFetching: true,
      movie: {},
    };

    this.fetchAPI =this.fetchAPI.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this); 
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const movieData = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({
      isFetching: false,
      movie: movieData,
    });
  } 

  async deleteMovie() {
    await movieAPI.deleteMovie(this.props.match.params.id);
    this.setState({
      done: true,
    });
  }
  render() {
    const { isFetching, done } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state,movie;
    
    if (isFetching) return <Loading />;

    if(done) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="" onClick={() => this.deleteMovie()}>DELETAR</Link><br />
        <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link><br />
        <Link to="/" >VOLTAR</Link>

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
