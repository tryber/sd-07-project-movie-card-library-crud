import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.fetch = this.fetch.bind(this);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    this.setState(
      { loading: true }, // Primeiro parâmetro da setState
      async () => {
        const moviesGetted = await (movieAPI.getMovies());
        this.setState({
          movies: moviesGetted,
          loading: false,
        });
      });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    if (this.state.loading) return (<Loading />);
    const id = this.props.match.params.id;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movies[id - 1];
    const edit = '/movies/'.concat(id).concat('/edit');
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div><Link to={edit}>EDITAR</Link></div>
        <div><Link to="/">VOLTAR</Link></div>
      </div>
    );
  }
}
MovieDetails.propTypes = { match: PropTypes.shape().isRequired };

export default MovieDetails;
