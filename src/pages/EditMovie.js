import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, status: 'loading', shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((movieAct) => this.setState({ movie: movieAct }, () => this.setState({ status: 'load' })));
  }

  componentDidUpdate() {
    if (this.state.shouldRedirect === true) {
      this.props.history.push('/');
    }
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then((response) => response === 'OK' && this.setState({ shouldRedirect: true }));
  }

  render() {
    const { status, movie } = this.state;

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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default EditMovie;
