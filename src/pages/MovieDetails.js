import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((result) => {
      const movie = { ...result };
      this.setState({ movie, loading: false });
    });
  }
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const loading = this.state.loading;
    const { id } = this.props.match.params;

    return (
      loading ? <Loading /> :
      <div data-testid="movie-details">
        <h1>{`Title: ${title}`}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>
          EDITAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
      </div>
    );
  }
}
// MovieDetails.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
export default MovieDetails;
