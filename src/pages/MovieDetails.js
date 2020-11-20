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
  this.setState({ loading: true });
  const { match } = this.props;
  movieAPI.getMovie(match.params.id).then((result) => this.setState({ movie: result, loading: false }));
}

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
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
          </div>
      )}
      </div>
    );
  }
}

export default MovieDetails;
