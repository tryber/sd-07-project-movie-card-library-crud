import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
// import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
// import { Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loadind',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const getMovieId = async (id) => {
      const movieId = await movieAPI.getMovie(id);
      this.setState({
        movie: movieId,
      });
    };
    const { id } = this.props.match.params;
    getMovieId(id);
  }

  handleSubmit(updatedMovie) {}

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
