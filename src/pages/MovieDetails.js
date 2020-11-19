import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.getMovieFromAPI = this.getMovieFromAPI.bind(this);
    this.clickRemoveMovie = this.clickRemoveMovie.bind(this);
    this.state = {
      loading: true,
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
      },
    };
  }

  componentDidMount() {
    this.getMovieFromAPI();
  }

  async getMovieFromAPI() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);

    this.setState({ loading: false, movie });
  }

  async clickRemoveMovie() {
    const { id } = this.props.match.params;
    await movieAPI.deleteMovie(id);
  }


  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;
    const { id } = this.props.match.params;

    return (
      <div>
        { loading ? <Loading /> :
        <div data-testid="movie-details">
          <p>{`Title: ${title}`}</p>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to="/">VOLTAR</Link>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/" onClick={this.clickRemoveMovie}>DELETAR</Link>
        </div>
        }
      </div>

    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
