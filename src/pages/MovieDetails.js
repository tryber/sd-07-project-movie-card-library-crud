import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link  } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super()
    this.state ={
      movie: [],
      loading: true,
    }
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false
    })
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { id } = this.props.match.params;
    // console.log(this.state.movies);
    // const getMovie = this.state.movies.find((movie) => movie.id === parseInt(this.props.match.params.id));
    console.log(this.state.movie);
    if(this.state.loading) return <Loading />
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/">VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
