import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.onClickDeleteHandler = this.componentDidMount.bind(this);

    this.state = {
      loading: true,
      movie: undefined,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) => {
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  async onClickDeleteHandler() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;

    if (loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props.match.params;
    return (
      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
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
  match: PropTypes.objectOf({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.objectOf({
      id: PropTypes.number.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
