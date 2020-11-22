import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: [],
    };
  }

  componentDidMount() {
    this.fetchIDMovie();
  }

  async fetchIDMovie() {
    this.setState(
      { loading: true },
    async () => {
      const { id } = this.props.match.params;
      const movie = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie,
      });
    },
    );
  }
  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (this.state.loading === true) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <div>
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div>
          <span><Link to="/">VOLTAR</Link></span>
        </div>
        <div>
          <span><Link to={`/movies/${id}/edit`}>EDITAR</Link></span>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
