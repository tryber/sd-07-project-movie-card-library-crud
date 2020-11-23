import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovieEdit = this.fetchMovieEdit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    const requestUpdate = await movieAPI.updateMovie(updatedMovie);
  }

  componentDidMount() {
    this.fetchMovieEdit();
  }

  async fetchMovieEdit() {
    const { id } = this.props.match.params;
    const requestResult = await movieAPI.getMovie(id);
    this.setState({
      status: 'not loading',
      movie: requestResult,
    })    
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      console.log('entrei');
      // Redirect
    }

    if (status === 'loading') {
      return "Carregando..."
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
