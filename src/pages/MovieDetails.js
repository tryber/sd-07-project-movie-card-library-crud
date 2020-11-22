import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.state = {
      movie: undefined,
      loading: true,
      function: false,
    };
  }

  componentDidMount() {
    this.requestMovie();
  }

  async deleteMovie(movieID) {
    await movieAPI.deleteMovie(movieID);
  }

  async requestMovie() {
    const { id } = this.props.match.params;
    const requestedMovie = await movieAPI.getMovie(id);
    this.setState({ movie: requestedMovie });
  }

  renderMovie() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}><p>EDITAR</p></Link>
          <Link to="/"><button onClick={() => this.deleteMovie(id)}>DELETAR</button></Link>
          <Link to="/"><p>VOLTAR</p></Link>
        </div>
      </div>
    );
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    return (this.state.movie ? this.renderMovie() : <Loading />);
    /*
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    ); */
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
