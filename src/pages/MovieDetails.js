import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor (props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
    }
  }

  fetchMovie() {
    this.setState(async () => {
      const movie = await movieAPI.getMovie(this.props.match.params.id);
      this.setState({ movie: movie, loading: false });
    });
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state
    return (
      <div data-testid="movie-details">
        { loading ? <Loading /> :
        <div className="movie-card">
          <img className="movie-card-image" alt="Movie Cover" src={imagePath} />
          <div className="movie-card-body">
            <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
            <p>{`Genre: ${genre} / Rating: ${rating}`}</p>
          </div>
          <div className="button-background"> 
            <Link className="button-link" to={`/`}>VOLTAR</Link>
            <Link className="button-link" to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link className="button-link" to={`/`}>DELETAR</Link>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default MovieDetails;
