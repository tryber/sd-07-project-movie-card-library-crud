import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      shouldRedirect: false,
      movie: {
        genre: 'action',
        imagePath: '',
        rating: 0,
        storyline: '',
        subtitle: '',
        title: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    this.renderMovie(match.params.id);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  async renderMovie(id) {
    this.setState({ status: 'loading' });
    const response = await movieAPI.getMovie(id);
    this.setState({
      status: '',
      movie: {
        id: response.id,
        imagePath: response.imagePath,
        title: response.title,
        subtitle: response.subtitle,
        storyline: response.storyline,
        genre: response.genre,
        rating: response.rating,
      },
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect from={`/movies/${movie.id}/edit`} to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  })),
  rating: PropTypes.number,
}.isRequired;

export default EditMovie;
