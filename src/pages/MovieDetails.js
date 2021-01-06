import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import {Link} from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();
    
    this.state = {
      movie: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovei();
  }

  async fetchMovei() {
    const { id } = this.props.match.params; 
    const endpoint = await movieAPI.getMovie(id);
    this.setState({
      movie: endpoint,
      loading: false,
    });
  }

  render() {
    // Change the condition to check the state
    const { loading }  = this.state;

    if (loading) {
      return <Loading />;
    }

    const { title, id, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h3>{`Title: ${title}`}</h3>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <p>movei details</p>
        <Link to={"/"}>VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
