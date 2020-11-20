import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
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
    this.movieById = this.movieById.bind(this);
  }

  componentDidMount() {
    this.movieById(this.props.match.params.id);
  }

  handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({ shouldRedirect: true, status: '' });
    });
  }


  async movieById(id) {
    const dataMovies = await movieAPI.getMovie(id);
    this.setState({ movie: dataMovies, status: '' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
