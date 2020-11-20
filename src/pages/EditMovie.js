import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };
    this.fetchIdEdit = this.fetchIdEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchIdEdit();
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    this.setState(
      { shouldRedirect: false },
      async () => {
        this.setState({
          shouldRedirect: true,
          movie: await updateMovie(updatedMovie),
        });
      });
  }

  async fetchIdEdit() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    this.setState(
      { status: 'loading' },
      async () => {
        this.setState({
          status: '',
          movie: await getMovie(id),
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
        <p>{this.state.movie.title}</p>
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
