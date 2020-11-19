import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      status: 'OK',
      shouldRedirect: false,
    };
  }

  handleSubmit(newMovie) {
    this.setState(
      {
        status: 'loading',
      },
      () => {
        movieAPI.createMovie(newMovie).then((response) => {
          this.setState({
            status: response,
            shouldRedirect: true,
          });
        });
      },
    );
  }

  render() {
    const { status, shouldRedirect } = this.state;

    if (shouldRedirect) {
      // Redirect
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
