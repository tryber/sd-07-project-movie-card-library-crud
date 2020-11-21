import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components/index';
import '../styles/components/MovieForm.css';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    this.setState({ loading: true });
    await movieAPI.createMovie(newMovie);
    this.setState({ loading: false, shouldRedirect: true });
  }

  render() {
    const { shouldRedirect, loading } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }

    return (
      <div className="form-container" data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
