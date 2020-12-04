import React, { Component } from 'react';
import Loading from '../components/Loading';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState(
      async () => {
        const { location } = this.props;
        const id = location.pathname.slice(-6, -5);
        console.log(id)
        const response = await movieAPI.getMovie(id);
        this.setState({
          loading: false,
          movie: response,
        });
      },
    );
  }

  handleSubmit(id) {
    this.setState(
      async () => {
        await movieAPI.updateMovie(id);
        this.setState({
          shouldRedirect: true,
        });
      },
    );
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return(<Redirect to='/' />)

    }

    if (loading) {
      return(<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
