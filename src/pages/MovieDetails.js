import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      isloading: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMovie(id);
  }

  async fetchMovie(id) {
    this.setState({ isloading: true });
    const fetchedMovie = await movieAPI.getMovie(id);
    this.setState({ movie: fetchedMovie, isloading: false });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { isloading } = this.state;
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details">
        {isloading ? (
          <Loading />
        ) : (
          <div>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <p>{`Title: ${title}`}</p>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <Link to={'/'}>VOLTAR</Link>
          </div>
          )
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
