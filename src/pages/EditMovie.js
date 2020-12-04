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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const movie = this.props.match.params.id;
    movieAPI.getMovie(movie)
    .then((result) => {
      this.setState({ selectedMovie: {
        id: result.id,
        title: result.title,
        storyline: result.storyline,
        genre: result.genre,
        rating: result.rating,
        subtitle: result.subtitle,
        imagePath: result.imagePath,
        bookmarked: result.bookmarked,
      },
      });
    });
  }

  handleSubmit(updatedMovie) {
    console.log(updatedMovie);
    movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { selectedMovie } = this.state;
    if (selectedMovie.sid < 1) {
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
EditMovie.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
