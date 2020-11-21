import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: {},
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.update(id);
  }

  async update(id) {
    const movieUpdated = await movieAPI.getMovie(id);
    this.setState({ movie: movieUpdated, status: '' });
  }
  async handleSubmit(updatedMovie) {
    const movieUpdate = await movieAPI.updateMovie(updatedMovie);
    this.setState({ movie: movieUpdate, shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
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
  match: PropTypes.objectOf(Object).isRequired,
};

export default EditMovie;
