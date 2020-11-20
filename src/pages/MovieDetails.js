import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      id: undefined,
      title: '',
      subtitle: '',
      storyline: '',
      rating: undefined,
      imagePath: '',
      bookmarked: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails() {
    const { id } = this.props.match.params;
    this.setState({ isLoading: true },
      async () => {
        const movie = await getMovie(id);
        this.setState({ ...movie, isLoading: false });
      });
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle, isLoading } = this.state;
    const { history } = this.props;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div className="movie-det">
        <div data-testid="movie-details" className="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <h3>{`Title: ${title}`}</h3>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div className="movie-det-button">
          <button className="det-button">VOLTAR</button>
          <button className="det-button">EDITAR</button>
        </div>
        </div>
      </div>);
  }
}

export default withRouter(MovieDetails);

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(),
    id: PropTypes.number,
  }).isRequired,
};
