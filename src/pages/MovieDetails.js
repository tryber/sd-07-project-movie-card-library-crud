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
      loading: true,
    };
  }

  componentDidMount() {
    this.fecthMovie();
  }

  /*  fecthMovie() {
    this.setState({ loading: false }, async () => {
    const { match } = this.props;
    const requestMovie = await movieAPI.getMovie(match.params.id);
    this.setState = ({ movie: requestMovie, loading: true });
    });
  }
  */

  async fecthMovie() {
    const requestMovie = await movieAPI.getMovie(this.props.match.params.id);
    this.setState({ movie: requestMovie, loading: false });
  }
  render() {
    const { movie, loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link onClick={() => movieAPI.deleteMovie(id)} to="/">DELETAR</Link>
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
