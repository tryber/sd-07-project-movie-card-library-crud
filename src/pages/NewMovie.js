import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      shouldRedirect: false,
      status: true,
    };
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    this.setState({
      shouldRedirect: true,
      loading: false,
    });
  }

  render() {
    const { shouldRedirect, loading } = this.state;
    if (shouldRedirect) return (<Redirect to="/" />);

    if (loading) return (<Loading />);

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
