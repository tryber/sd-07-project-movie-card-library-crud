import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.fetchRequestMovie = this.fetchRequestMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      status: '',
      shouldRedirect: false,
      movie: {},
      updateMovie: '',
    };
  }

  componentDidMount() {
    this.fetchRequestMovie();
  }

  fetchRequestMovie() {
    this.setState(
      {
        status: 'loading',
      },
      async () => {
        const { id } = this.props.match.params;
        const response = await movieAPI.getMovie(id);
        this.setState({
          status: '',
          movie: response,
        });
      },
    );
  }

  handleSubmit(updatedMovie) {
    this.setState(
      {
        status: 'loading',
      },
      async () => {
        const response = await movieAPI.updateMovie(updatedMovie);
        this.setState({
          status: 'loading',
          shouldRedirect: true,
          updateMovie: response,
        });
      },
    );
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
