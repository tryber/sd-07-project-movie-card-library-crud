import React, { Component } from 'react';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    // movieAPI.updateMovie(updatedMovie)
    this.setState({ status: '', shouldRedirect: true });
    console.log(this.props);
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // loading
    }

    if (status === 'loading') {
      // loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
