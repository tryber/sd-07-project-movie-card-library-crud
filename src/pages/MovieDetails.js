import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.state = {
      selectedMovie: {
        sid: 0,
        stitle: '',
        sstoryline: '',
        sgenre: '',
        srating: 0,
        ssubtitle: '',
        simagePath: '',
        sbookmarked: false,
      },
    };
  }
  componentDidMount() {
    const movie = this.props.match.params.id;
    movieAPI.getMovie(movie)
    .then((result) => {
      const { title, storyline, imagePath, genre, rating, subtitle } = result;
      this.setState({ selectedMovie: {
        sid: result.id,
        stitle: title,
        sstoryline: storyline,
        sgenre: genre,
        srating: rating,
        ssubtitle: subtitle,
        simagePath: imagePath,
        sbookmarked: result.bookmarked,
      },
      });
    });
  }
  deleteMovie() {
    const { selectedMovie } = this.state;
    const { sid } = selectedMovie;
    const id = sid;

    if (id > 0) {
      movieAPI.deleteMovie(id);
    }
  }
  render() {
    // Change the condition to check the state
    const {
      sid,
      stitle,
      sstoryline,
      simagePath,
      sgenre,
      srating,
      ssubtitle,
    } = this.state.selectedMovie;
    const editRoute = `/movies/${sid}/edit`;
    if (sid < 1) {
      return (
        <div data-testid="movie-details">
          <Loading />
        </div>
      );
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${simagePath}`} />
        <h3>{stitle}</h3>
        <p>{ssubtitle}</p>
        <p>{sstoryline}</p>
        <p>{sgenre}</p>
        <p>{srating}</p>
        <Link
          to={{
            pathname: editRoute,
            aboutProps: {
              movie: sid,
            },
          }}
        >
          EDITAR
        </Link>
        <Link to="/" onClick={this.deleteMovie()}>
          VOLTAR
        </Link>
        <Link to="/">
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
MovieDetails.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

