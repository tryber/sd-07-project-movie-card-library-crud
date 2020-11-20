import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
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
  }

  componentDidMount() {
    const p = this.props;
    const id = p.match.params.id;
    this.func(id);
  }

  async func(id) {
    const movies = await movieAPI.getMovie(id);
    this.setState({
      movie: movies,
      status: '',
    });
  }

  async handleSubmit(updatedMovie) {
    const movieUpdate = await movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: movieUpdate,
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
