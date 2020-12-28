import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      isLoading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteTheMovie = this.deleteTheMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        isLoading: false,
      });
    });
  }

  deleteTheMovie() {
    movieAPI.deleteMovie(this.props.match.params.id);
  }


  render() {
    const { isLoading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        { isLoading ? <Loading /> :
        <div className="movie-detail">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p><strong>{`Title: ${title}`}</strong></p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div className="link-detail">
            <Link to={`/movies/${id}/edit`} className="linkDown">EDITAR</Link>
            <Link to="/" className="linkDown">VOLTAR</Link>
            <Link to="/" className="linkDown" onClick={this.deleteTheMovie}>DELETAR</Link>
          </div>
        </div>}
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
