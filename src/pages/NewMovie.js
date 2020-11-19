import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor() {
    super();

    this.state = {
      Loading: false,
      shoudRedirect: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ Loading: true }, async () => {
      await movieAPI.createMovie(newMovie);
      this.setState({ Loading: false, shoudRedirect: true });
    });
  }

  render() {
    const { loading, shoudRedirect } = this.state;
    if (shoudRedirect) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie">
        {loading ? <loading /> : <MovieForm onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}
export default NewMovie;
