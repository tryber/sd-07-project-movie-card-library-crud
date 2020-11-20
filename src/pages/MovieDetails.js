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
    this.HandleDelete = this.HandleDelete.bind(this);
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
    // this.setState({ loading: true }, async () => {
      const result  = await movieAPI.deleteMovie(this.props.match.params.id);
      // if (result.status === 'OK' ) {
      //   this.setState({ loading: false });
  }

  // handleClick() {
  //   const movieId  = this.props.match.params.id;
  //   movieAPI.deleteMovie(movieId)
  // }

  // async clickRemoveMovie() {
  //   const { id } = this.props.match.params;
  //   await movieAPI.deleteMovie(id);
  // }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    //console.log(movies);

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { loading } = this.state;

    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : (
          <div>
          <h2>{title}</h2>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
            <Link to="/"> 
            VOLTAR |</Link>
            <Link to={`/movies/${this.props.match.params.id}/edit`}> EDITAR | </Link>
            <Link onClick={this.HandleDelete} to="/">
              DELETAR
            </Link>
        </div>
        )
        }
      </div>
    )
}}
      //teste

export default MovieDetails;
