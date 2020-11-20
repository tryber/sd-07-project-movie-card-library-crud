import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const p = this.props;
    const id = p.match.params.id;
    this.get(id);
  }

  async get(id) {
    const fetch = await movieAPI.getMovie(id);
    this.setState({ movie: fetch, status: true });
  }

  async handleSubmit(updatedMovie) {
    const movieAtualizado = await movieAPI.updateMovie(updatedMovie);
    this.setState({ movie: movieAtualizado, shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    return (
      status ?
        <div data-testid="edit-movie">
          <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        </div> : <Loading />
    );
  }
}

export default EditMovie;
