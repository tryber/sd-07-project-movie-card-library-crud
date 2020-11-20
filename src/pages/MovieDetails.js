import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: { title: "", id: 0, storyline: "", imagePath: "", genre: "", rating: 0, subtitle: "" },
      loading: false,
      // movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    let { id } = this.props.match.params;
    console.log('id ' + id)
    this.setState({ loading: true }, async () => {
      const data = await movieAPI.getMovie(id);
      console.log(data)
      this.setState({ movie: data, loading: false });
    });
  }

  render() {
    // Change the condition to check the state
    const { title, id, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    const editar = `/movies/:${id}/edit`;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={editar}>Editar</Link><br /><br />
          <Link to="/">VOLTAR</Link>
        </div>

      </div>
    );
  }
}

export default MovieDetails;
