import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
    };
  }
  
  componentDidMount() {
    this.renderMovie();
  }

  renderMovie() {
    this.setState({ loading: true }, async () => {
      const { match } = this.props;
      const requestMovie = await movieAPI.getMovie(match.params.id);
      this.setState({ movie: requestMovie, loading: false });
    });
  }
  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div className="movie-card" data-testid="movie-details">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <img className="card-image" alt="Movie Cover" src={`../${imagePath}`} />
            <p className="title"><strong>{`Título: ${title}`}</strong></p>
            <h3 className="subtitle">{`Subtítulo: ${subtitle}`}</h3>
            <p className="movie-card-storyline">{`Sinopse: ${storyline}`}</p>
            <p className="movie-card-storyline"><b>{`Gênero: ${genre}`}</b></p>
            <p className="rating" ><em>{`Rating: ${rating}`}</em></p>
            <div className="exemplo">
            <Link to={`/movies/${id}/edit`} className="example-item example-item_first">EDITAR</Link>
            <Link to="/" className="example-item example-item_second">VOLTAR</Link>
            <Link to="/" className="example-item example-item_second">DELETAR</Link>
            </div>
          </div>
          
      )}
      </div>
    );
  }
}

export default MovieDetails;
