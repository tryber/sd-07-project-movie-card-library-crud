import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      shoudRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ loading: true }, async () => {
      await movieAPI.createMovie(newMovie);
      this.setState({ loading: false, shoudRedirect: true });
    });
  }

  render() {
    const { loading, shoudRedirect } = this.state;
    if (shoudRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie">
        {loading ? <Loading /> : <MovieForm onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}
export default NewMovie;
