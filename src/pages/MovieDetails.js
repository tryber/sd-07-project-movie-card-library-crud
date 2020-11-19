import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading, ShowDetails } from '../components/index';
import '../styles/pages/MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        loading: false,
      });
    });
  }

  render() {
    const { movie, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <ShowDetails movie={movie} />
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
