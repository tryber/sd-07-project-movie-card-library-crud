import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movieDetail = await movieAPI.getMovie(id);
    this.setState({ movie: movieDetail, loading: false });
  }

  render() {
    const { movie, loading } = this.state;
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
           </div>
          }
      </div>
    );
  }
}

export default MovieDetails;
