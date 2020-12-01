import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchDetails = this.fetchDetails.bind(this);
    this.returnMovieDetails = this.returnMovieDetails.bind(this);

    this.state = {
      loadingMensage: true,
      movie: {},
    }
  }

  fetchDetails(id) {
    this.setState({
      loadingMensage: true,
    }, () => {
      movieAPI.getMovie(id).then((response) => {
        this.setState({
          loadingMensage: false,
          movie: response,
        })
      })
    })
  }

  returnMovieDetails(movie) {
    console.log('chamou')
    const { imagePath, subtitle, storyline, genre, rating, title, id } = movie;
    return (
      <div>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button type='button'>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        </button>
        <button type='button'>
          <Link to='/'>VOLTAR</Link>
        </button>
      </div>
    )
  }
  
  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchDetails(id);
  }
  render() {
    // Change the condition to check the state
    const { loadingMensage, movie } = this.state;
    return (
      <div data-testid="movie-details">
        { loadingMensage ? <Loading /> : this.returnMovieDetails(movie) }
      </div>
    );
  }
}

export default MovieDetails;
