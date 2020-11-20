import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { load: true, redirected: false, movie: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.fetchAPI();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async fetchAPI() {
    const { id } = this.props.match.params;
    const response = await movieAPI.getMovie(id);
    if (this._isMounted) {
      this.setState({ movie: response, load: false });
    }
  }

  async handleSubmit(updatedMovie) {
    const updated = await movieAPI.updateMovie(updatedMovie);
    if (updated === 'OK') this.setState({ redirected: true });
  }

  render() {
    const { load, redirected, movie } = this.state;
    if (redirected) {
      return (<Redirect to="/" />);
    }

    if (load) {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
