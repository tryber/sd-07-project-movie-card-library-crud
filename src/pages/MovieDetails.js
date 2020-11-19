import React, { Component } from "react";
import * as movieAPI from "../services/movieAPI";
import { Loading } from "../components";
import { Link } from "react-router-dom";

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { movie: {}, load: true };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((movieAct) =>
        this.setState({ movie: movieAct }, () => this.setState({ load: false }))
      );
  }

  handleSubmit(movieForDelete) {
    movieAPI.deleteMovie(this.props.match.params.id)
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;
    const { load } = this.state;

    if (load) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button>
          <Link to={`/`}>VOLTAR</Link>
        </button>
        <button>
          <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>
        </button>

        <button onClick={this.handleSubmit}>
          <Link to='/'>DELETAR</Link>
        </button>
      </div>
    );
  }
}

export default MovieDetails;
