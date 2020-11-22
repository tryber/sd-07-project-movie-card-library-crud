import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      id: '',
    };
  }

  componentDidMount() {
    this.listMovie();
  }

/*   componentDidUpdate() {
    this.listMovie();
  } */

  listMovie() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then((resolve) => {
      if (resolve.title !== undefined) {
        this.setState({ movie: resolve, loading: false, id });
      }
    })
    .catch((error) => console.log('Promises rejected: ', error));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    if (this.state.loading) {
      return <Loading />;
    }


    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.state;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`Title: ${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default MovieDetails;
