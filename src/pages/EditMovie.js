import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
    this.state = {
      status: '',
      shouldRedirect: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ status: 'loading' }, async () => {
      const movieById = await movieAPI.getMovie(id);
      this.setState({
        status: '',
        movie: movieById,
      });
    });
  }

  async handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' }, async () => {
      const updateMovie = await movieAPI.updateMovie(updatedMovie);
      this.setState({
        status: '',
        movie: updateMovie,
        shouldRedirect: true,
      });
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
