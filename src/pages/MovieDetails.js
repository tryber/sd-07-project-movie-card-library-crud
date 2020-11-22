import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
    this.state = {
      isLoading: true,
      movie: [],
    };
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true }, async () => {
      const returnedMovie = await movieAPI.getMovie(id);
      console.log(returnedMovie);
      this.setState({
        isLoading: false,
        movie: returnedMovie,
      });
    });
  }

  componentDidMount() {
    this.fetchMovie();
  }

  renderMovie() {
    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
    return (
      <div>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`} >EDITAR</Link>
          <Link to={'/'} >VOLTAR</Link>
        </div>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div data-testid="movie-details">
        {isLoading ? <Loading /> : this.renderMovie()}
      </div>
    );
  }
}

export default MovieDetails;
