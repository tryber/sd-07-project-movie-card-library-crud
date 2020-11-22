import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: undefined,
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  async requestMovie() {
    const { id } = this.props.match.params;
    const requestedMovie = await movieAPI.getMovie(id);
    this.setState({ movie: requestedMovie });
  }

  async handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: true });
    await movieAPI.updateMovie(updatedMovie);
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      // Redirect
      return (<Redirect to="/" exact />);
    }

    if (movie === undefined) {
      // render Loading
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
