import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
class MovieDetails extends Component {
 constructor() {
    super();

    this.state = {
      movie: {},
    }
  }
  
  componentDidMount() {
    console.log(this.props)
     const idMovie = this.props.match.params.id;
    // match params nulo
    this.fetchMovie(idMovie);
  }
  
  fetchMovie = async (id) => {
    const response = await movieAPI.getMovie(id)
    this.setState({movie: response});
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (

      <div data-testid="movie-details">
        {
         Object.entries(this.state.movie).length === 0 ? <Loading /> :
         <div>
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
          </div>
        }
      </div>
    );
  }
}

export default MovieDetails;
