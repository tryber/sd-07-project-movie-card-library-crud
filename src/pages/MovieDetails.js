import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
    const { match } = this.props;
    this.renderMovie(match.params.id);
  }

  async renderMovie(id) {
    const result = await movieAPI.getMovie(id);
    this.setState({ movie: result, loading: false });
  }

  render() {
    const { match } = this.props;
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
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
              <Link
                to={`/movies/${match.params.id}/edit`}
                className="example-item example-item_first"
              >
                EDITAR
              </Link>
              <Link
                to="/"
                className="example-item example-item_second"
              >
                VOLTAR
              </Link>
              <button className="example-item example-item_third">
                <Link to="/" onClick={() => movieAPI.deleteMovie(match.params.id)}>DELETAR</Link>
              </button>
            </div>
          </div>
      )}
        </div>
      );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;

