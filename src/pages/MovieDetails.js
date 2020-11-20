import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';
import './pages.css';
class MovieDetails extends Component {
  
    constructor() {
      super();
      this.state = {
        movie: {},
        loading: true,
        id: 0,
        // redirect: false,
      }
      this.deleteMovie = this.deleteMovie.bind(this);
    };
  
    fetchDetails() {
      const { id } = this.props.match.params;
      this.setState({ loading: true }, () => {
        movieAPI.getMovie(id)
          .then((response) => this.setState({ movie: response, loading: false, id }));
      })
    }

    componentDidMount() {
      this.fetchDetails();
    }

    deleteMovie() {
      const { id } = this.props.match.params;
      this.setState({ loading: true, redirect: false }, () => {
        movieAPI.deleteMovie(id)
          .then(() => this.setState({ redirect: true, loading: false }));
      });
    }

    render() {
    // const { title, storyline, imagePath, genre, rating, subtitle } = {};
    const { loading, id, redirect, movie:
      { title, storyline, imagePath, genre, rating, subtitle },
    } = this.state;
    console.log(imagePath)
    if (loading) return <Loading />;
    // if (redirect) return <Redirect to="" />;
    return (
      <div data-testid="movie-details">
        <div><h1>Movie Details</h1></div>
          <img alt='Movie Cover' src={`${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div>
            <div>
              <Link to={`/movies/${id}/edit`} className="edit">EDITAR</Link>
            </div>
            <div>
            <Link to="/" className="return">VOLTAR</Link>
            </div>
            <div>
            <Link onClick={this.deleteMovie} to className="delete">DELETAR</Link>
            </div>
          </div>
        </div>
    );
  }
}

MovieDetails.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
