import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm } from '../components';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async fetchMovie() {
    const movieId = this.props.match.params.id;
    const requestReturn = await movieAPI.getMovie(movieId);
    this.setState({
      loading: false,
      movie: requestReturn,
      shouldRedirect: false,
    });
  }

  componentDidMount() {
    this.fetchMovie();
  }
  
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true});
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    if (loading) {
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
