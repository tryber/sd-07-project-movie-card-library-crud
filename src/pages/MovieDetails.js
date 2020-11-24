import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      movie: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, async () => {
      const movieById = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: movieById,
      });
    });
  }

  async handleDelete(id) {
    await movieAPI.deleteMovie(id);
  }
  // source: Dica do delete peguei no plantão do Rufino.

  render() {
    // Change the condition to check the state
    const { loading, movie } = this.state;
    if (loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h4>{`Title: ${title}`}</h4>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={() => this.handleDelete(id)}>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
