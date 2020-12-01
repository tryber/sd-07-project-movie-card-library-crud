import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Info from '../components/Info';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      movie: {},
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState({ loading: true }, async () => {
      const { id } = this.props.match.params;
      const requestedMovie = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: {
          title: requestedMovie.title,
          subtitle: requestedMovie.subtitle,
          storyline: requestedMovie.storyline,
          imagePath: requestedMovie.imagePath,
          genre: requestedMovie.genre,
          rating: requestedMovie.rating,
        },
      });
    });
  }
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { loading } = this.state;
    const { id } = this.props.match.params;
    return (
      <div data-testid="movie-details">
        {loading && <Loading />}
        {!loading && <Info movie={this.state.movie} id={id} />}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
