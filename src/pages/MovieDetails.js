import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
    }
  }

  async fetchMovie() {
    const { match } = this.props;
    const movieId = match.params.id;
    this.setState({ loading: true }, async () => {
      const request = await movieAPI.getMovie(movieId);
      this.setState(() => ({
        movie: request,
        loading: false,
      }))
    })
    
  }
  
  componentDidMount() {
    this.fetchMovie();
  }

  
  render() {
    // Change the condition to check the state
    const { loading } = this.state
    if (loading) {
      return <Loading />;
    }

    const { movie } = this.state;
    

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${movie.imagePath}`} />
            <p>{`Title: ${movie.title}`}</p>
            <p>{`Subtitle: ${movie.subtitle}`}</p>
            <p>{`Storyline: ${movie.storyline}`}</p>
            <p>{`Genre: ${movie.genre}`}</p>
            <p>{`Rating: ${movie.rating}`}</p>
            <Link className='edit-link' to={`/movies/${movie.id}/edit`}>
                  EDITAR
            </Link>
            <Link className='back-link' to='/'>
                  VOLTAR
            </Link>
            <Link onClick={ async () => await movieAPI.deleteMovie(movie.id)} to='/'>DELETAR</Link>

      </div>
    );
  }
}


export default MovieDetails;
