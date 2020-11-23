import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ loading: true }, () => {
      movieAPI.createMovie(newMovie)
        .then(() => this.setState({ loading: false, redirect: true }));
    });
  }

  render() {
    const { redirect, loading } = this.state;
    if (redirect) return <Redirect to="/" />;
    if (loading) return <Loading />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewMovie;
