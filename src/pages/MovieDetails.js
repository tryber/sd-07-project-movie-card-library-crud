import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.func = this.func.bind(this);
    this.state = {
      movie: {},
      loading: false,
    };
  }
  componentDidMount() {
    const p = this.props;
    const id = p.match.params.id;
    this.func(id);
  }

    async func(id) {
    const movies = await movieAPI.getMovie(id);
    this.setState({
      movie: movies,
      loading: true,
    });
  }

  async deleteMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      this.state.loading ?
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <button onClick={() => this.deleteMovie(id)}><Link to="/">DELETAR</Link></button>
        </div>
      : <Loading />
    );
  }
}

/* MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    match: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
 */
export default MovieDetails;
