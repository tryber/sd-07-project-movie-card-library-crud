import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components/index';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      movieInfos: {},
      loading: true,
    };
  }

  fetchData() {
    const { id } = this.state;
    this.setState({ loading: true }, async () => {
      const requestMovie = await movieAPI.getMovie(id);
      this.setState({ movieInfos: requestMovie, loading: false });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  renderData() {
    const { movieInfos, id } = this.state;
    return (
      <div>
        <img alt="Movie Cover" src={`../${movieInfos.imagePath}`} />
        <h2>{movieInfos.title}</h2>
        <p>{`Subtitle: ${movieInfos.subtitle}`}</p>
        <p>{`Storyline: ${movieInfos.storyline}`}</p>
        <p>{`Genre: ${movieInfos.genre}`}</p>
        <p>{`Rating: ${movieInfos.rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    // Change the condition to check the state
    // if (true) return <Loading />;
    return (
      <div data-testid="movie-details">
        {loading ? <Loading /> : this.renderData()}
      </div>
    );
  }
}

export default MovieDetails;
