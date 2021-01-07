import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      movie: [],
    };
    this.HandleDelete = this.HandleDelete.bind(this);
  }

  /* se o caminho for usado com browserRouter ele vai gerar history, location, match (params(id)) */

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => this.setState({ movie }));
    console.log(this.props);
  }

  async HandleDelete() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;

    if (movie.length === 0) {
      return <Loading />;
    }

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/`}>VOLTAR</Link>
        <br />
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <br />
        <Link onClick={this.HandleDelete} to={`/`}>DELETAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
