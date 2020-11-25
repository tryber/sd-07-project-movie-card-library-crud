import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import { MovieForm } from '../components';
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
    this.idMovie = this.idMovie.bind(this);
  }

  componentDidMount() {
    this.idMovie(this.props.match.params.id);
  }


  handleSubmit(updatedMovie) {
    this.setState({ status: 'loading' }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({ shouldRedirect: true, status: '' });
    });
  }


  async idMovie(id) {
    const movies = await movieAPI.getMovie(id);
    this.setState({ movie: movies, status: '' });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return (<Redirect to="/" />);
    }

    if (status === 'loading') {
      // render Loading
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
