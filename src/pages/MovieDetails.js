import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.movieById = this.movieById.bind(this);
    this.showMovie = this.showMovie.bind(this);

    this.state = {
      movie: {
        id: 0,
        title: '',
        storyline: '',
        imagePath: '',
        genre: 'action',
        rating: 0,
        subtitle: '',
      },
      loading: true,
    };
  }

  componentDidMount() {
    this.movieById(this.props.match.params.id);
  }

  async movieById(id) {
    const dataMovies = await movieAPI.getMovie(id);
    this.setState({ movie: dataMovies, loading: false });
  }

  showMovie() {
    const movie = this.state.movie;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h2>{`Title: ${title}`}</h2>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <Link className="button-edit" to={`/movies/${id}/edit`}>
          EDITAR
        </Link>
        <Redirect className="button-edit" to="/">
          VOLTAR
        </Redirect>
        <Link className="button-edit" to="/">
          DELETE
        </Link>
      </div>
    );
  }

  render() {
    return (this.state.loading ? <Loading /> : this.showMovie());
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
