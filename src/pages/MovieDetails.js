import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      id: '',
    };
  }

  componentDidMount() {
    this.listMovie();
  }

  listMovie() {
    const { id } = this.props.match.params;
    movieAPI.getMovie()
    .then((resolve) => {
      console.log(resolve);
      this.setState({ movies: resolve, loading: false, id });
    })
    .catch((error) => console.log('Promises rejected: ', error));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    if (this.state.loading) {
      return <Loading />;
    }


    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <h1>{`Title: ${title}`}</h1>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
