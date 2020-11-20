import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: false,
    };
  } 

  componentDidMount() {
    this.fetchMovie();
  }


  fetchMovie() {
    this.setState({ loading: true }, async () => {
      const data = await movieAPI.getMovie(this.props.match.params.id);
      this.setState({ movie: data, loading: false });
    });
  }

  async HandleDelete() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    //console.log(movies);

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details" className="movie-card">
        <h2>{title}</h2>
        <img alt="Movie Cover" src={`../${imagePath}`} className="movie-card-image" />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to="/"> VOLTAR  |</Link>
          <Link to={`/movies/${this.props.match.params.id}/edit`}>  EDITAR  | </Link>
          <Link onClick={this.HandleDelete} to="/">
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
