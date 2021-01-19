import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movieDetail = await movieAPI.getMovie(id);
    this.setState({ movie: movieDetail, loading: false });
  }

  async deleteMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    const { movie, loading, shouldRedirect } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div className="movie">
          {
            loading ? <Loading /> :
            <div data-testid="movie-details">
              <img alt="Movie Cover" src={`../${imagePath}`} />
              <p>{`Title: ${title}`}</p>
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
              <div>
                <span><Link to={`/movies/${movie.id}/edit`}>EDITAR</Link></span>
                <span><Link to="/">VOLTAR</Link></span>
              </div>
              <div>
                <span><Link to="/" onClick={this.deleteMovie}>DELETAR</Link></span>
              </div>
           </div>
          }
      </div>
    );
  }
}

export default MovieDetails;
