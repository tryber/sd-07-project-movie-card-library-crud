import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { selectedMovie } = this.state;
    if (selectedMovie.id < 1) {
      return <Loading />;
    }
    const { status, shouldRedirect } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={selectedMovie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  location: PropTypes.shape({
    aboutProps: PropTypes.shape({}),
  }),
};
EditMovie.defaultProps = {
  location: PropTypes.shape({
    aboutProps: PropTypes.shape({}),
  }),
};
