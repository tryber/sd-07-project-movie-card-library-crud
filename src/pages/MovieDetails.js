import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState({ loading: true }, async () => {
      const { match } = this.props;
      const movieId = match.params.id;
      const request = await movieAPI.getMovie(movieId);
      this.setState({
        movie: request,
        loading: false,
      });
    });
  }


  render() {
    // Change the condition to check the state

    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Title: ${title}`}</p>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <Link className="edit-link" to={`/movies/${id}/edit`}>
                  EDITAR
            </Link>
            <Link className="back-link" to="/">
                  VOLTAR
            </Link>
            <Link onClick={() => movieAPI.deleteMovie(id)} to="/">DELETAR</Link>
          </div>
        )}
      </div>
    );
  }
}


export default MovieDetails;
