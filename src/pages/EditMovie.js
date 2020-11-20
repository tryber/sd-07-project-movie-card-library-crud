import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    this.setState(
      { status: 'loading' },
      async () => {
        const id = this.props.match.params.id;
        const requestReturn = await movieAPI.getMovie(id);
        this.setState({
          movie: requestReturn,
          status: '',
        });
      },
    );
  }

  async handleSubmit(updatedMovie) {
    if (await movieAPI.updateMovie(updatedMovie) === 'OK') {
      this.setState({
        shouldRedirect: true,
      });
    }
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
