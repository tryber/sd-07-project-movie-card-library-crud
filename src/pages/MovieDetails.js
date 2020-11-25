import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.Movie = this.Movie.bind(this);
    this.newMovie = this.newMovie.bind(this);

    this.state = {
      loading: true,
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
        id: 0,
      },
    };
  }

  componentDidMount() {
    this.Movie(this.props.match.params.id);
  }

  async Movie(id) {
    const movie = await movieAPI.getMovie(id);
    this.setState({ loading: false, movie });
  }
  newMovie() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
      </div>);
  }
  render() {
    const { loading } = this.state;
    return (loading ? <Loading /> : this.newMovie());
  }
}

MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
