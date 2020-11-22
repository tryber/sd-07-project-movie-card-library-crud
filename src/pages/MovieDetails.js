import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetchMoviesId = this.fetchMoviesId.bind(this);
    this.state = {
      movie: "",
      loading: true,
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchMoviesId(id);
  }

  async fetchMoviesId(id) {
    const requestReturn = await movieAPI.getMovie(id);    
    this.setState({
      movie: requestReturn,
      loading: false,
    })
  }

  
  
  render() {
                
    if (this.state.loading) return "Carregando...";
    
    const myMovie = this.state.movie;
  
    const { title, storyline, imagePath, genre, rating, subtitle } = myMovie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button type="button">  
          <Link to="/">VOLTAR</Link>        
        </button>        
      </div>
    );
  }
}

export default MovieDetails;
