import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      movieInfo: {
        genre: 'action',
        imagePath: '',
        rating: 0,
        storyline: '',
        subtitle: '',
        title: '',
      },
    };

    function setStateFunction(state) {
      const changeLoading = () => {
        if (state.isLoading === true) {
          return false;
        }
        return true;
      };
      return { ...state, isLoading: { changeLoading } };
    }

    function handleLoading(elem) {
      movieAPI.getMovie().then(() => {
        elem.setState(setStateFunction(elem.state));
      });
    }

    handleLoading(this);
  }

  // Consultei o projeto do Rodrigo Feitor para entender
  // a lógica desse requisito

  componentDidMount() {
    const { match } = this.props;
    this.renderMovie(match.params.id);
  }

  async renderMovie(id) {
    const response = await movieAPI.getMovie(id);
    this.setState({
      movieInfo: {
        id: response.id,
        imagePath: response.imagePath,
        title: response.title,
        subtitle: response.subtitle,
        storyline: response.storyline,
        genre: response.genre,
        rating: response.rating,
      },
    });
  }

  render() {
    if (!this.state.isLoading) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${this.state.movieInfo.imagePath}`} />
        <p>{`Title: ${this.state.movieInfo.title}`}</p>
        <p>{`Subtitle: ${this.state.movieInfo.subtitle}`}</p>
        <p>{`Storyline: ${this.state.movieInfo.storyline}`}</p>
        <p>{`Genre: ${this.state.movieInfo.genre}`}</p>
        <p>{`Rating: ${this.state.movieInfo.rating}`}</p>
        <div><Link to={`/movies/${this.state.movieInfo.id}/edit`}>EDITAR</Link></div>
        <div><Link to="/">VOLTAR</Link></div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  })),
}.isRequired;

export default MovieDetails;
