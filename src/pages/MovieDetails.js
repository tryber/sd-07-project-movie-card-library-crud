import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: false,
    }
  }

  componentDidMount(){
    this.buildMovie();
  }

  async buildMovie() {
    const id = this.props.match.params.id;
    this.setState({ loading: true });
    const actualMovie = await movieAPI.getMovie(id);
    this.setState({
      movie: actualMovie,
      loading: false,
    })
  }
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    if (this.state.loading) return <Loading />
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
