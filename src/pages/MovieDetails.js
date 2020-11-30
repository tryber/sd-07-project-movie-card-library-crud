import React, { Component } from 'react';
import Info from '../components/Info';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {

  constructor(){
    super()
    this.state = {
      loading: false,
      movie: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true},async () => {
      const { id } = this.props.match.params;
      const requestedMovie =  await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: {
          title: requestedMovie.title,
          subtitle: requestedMovie.subtitle,
          storyline:requestedMovie.storyline,
          imagePath: requestedMovie.imagePath,
          genre: requestedMovie.genre,
          rating: requestedMovie.rating,
        }
      })
    })
  }
  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;
    const { id } = this.props.match.params;
    return (
      <div data-testid="movie-details">
        {loading && <Loading />}
        {!loading && <Info movie={this.state.movie} id={id} />} 
      </div>
    );
  }
}

export default MovieDetails;
