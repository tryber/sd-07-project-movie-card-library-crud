import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieInfo = this.getMovieInfo.bind(this);
  }

  componentDidMount() {
    this.getMovieInfo();
  }

  getMovieInfo() {
    const { getMovie } = movieAPI;
    this.setState({ status: 'loading' });
    this.setState(async () => {
      await getMovie(this.props.match.params.id).then((result) =>
        this.setState({ movie: result, status: '' }),
      );
    });
  }

  async handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    this.setState({ status: 'loading' });
    await updateMovie(updatedMovie);
    this.setState({ status: '', shouldRedirect: true });
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
