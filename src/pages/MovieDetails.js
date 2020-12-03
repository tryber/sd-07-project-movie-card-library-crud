import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {
        id: 0,
        title: '',
        storyline: '',
        genre: '',
        rating: 0,
        subtitle: '',
        imagePath: '',
        bookmarked: false,
      },
    };
  }
  componentDidMount() {
    const movie = this.props.location.aboutProps;
    movieAPI.getMovie(movie.movie)
    .then((result) => {
      const { title, storyline, imagePath, genre, rating, subtitle } = result;
      this.setState({ selectedMovie: {
        id: result.id,
        title: title,
        storyline: storyline,
        genre: genre,
        rating: rating,
        subtitle: subtitle,
        imagePath: imagePath,
        bookmarked: result.bookmarked,
      },
      });
    });
  }
  render() {
    // Change the condition to check the state
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.selectedMovie;
    const editRoute = `/movies/:${id}/edit`;
    if (id < 1) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{genre}</p>
        <p>{rating}</p>
        <Link
          to={{
            pathname: editRoute,
            aboutProps: {
              movie: id,
            },
          }}
        >
          EDITAR
        </Link>
        <Link to="/">
          VOLTAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  location: PropTypes.shape({
    aboutProps: PropTypes.shape({}),
  }),
};
MovieDetails.defaultProps = {
  location: PropTypes.shape({
    aboutProps: PropTypes.shape({}),
  }),
};

