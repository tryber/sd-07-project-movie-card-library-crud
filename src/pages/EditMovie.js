import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.definedState = this.definedState.bind(this);
  }

  async componentDidMount() {
    const { getMovie } = movieAPI;
    const { id } = this.props.match.params;
    const resultRequest = await getMovie(id);
    this.definedState(resultRequest);
  }

  definedState(request) {
    this.setState({
      movie: request,
      status: '',
    });
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    await updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="edit-movie">
        {status === 'loading' ? <Loading /> : <MovieForm movie={movie} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

export default EditMovie;
