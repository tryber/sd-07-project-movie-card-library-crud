import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = { movie: [], loading: false };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState({ loading: true }, async () => {
      // console.log(this.props);
      const { id } = this.props.match.params;
      const response = await movieAPI.getMovie(id);
      this.setState({ movie: response, loading: false });
      // console.log(response);
    });
  }

  render() {
    const renderLoading = this.state.loading && <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params;

    return (
      <div>
        {this.state.loading ? renderLoading : <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p><em>{`Title: ${title}`}</em></p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to='/'>VOLTAR</Link>
        </div>}
      </div>
    );
  }
}

MovieDetails.propTypes = { match: PropTypes.shape({
  params: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
}).isRequired };

export default MovieDetails;
