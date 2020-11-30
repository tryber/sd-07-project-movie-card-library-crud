import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      redirect: false,
    };

    this.requiredMovie = this.requiredMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.requiredMovie();
  }

  async requiredMovie() {
    const { match } = this.props;
    const requestMovie = await movieAPI.getMovie(match.params.id);
    this.setState({
      movie: requestMovie,
      status: 'ready',
    });
  }

  async handleSubmit(newMovie) {
    await movieAPI.updateMovie(newMovie);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { status, redirect, movie } = this.state;
    if (redirect) {
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
