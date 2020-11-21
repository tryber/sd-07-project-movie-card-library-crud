import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { MovieForm } from '../components';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestApiMovie = this.requestApiMovie.bind(this);
  }

  componentDidMount() {
    this.requestApiMovie();
  }

  async requestApiMovie() {
    const { id } = this.props.match.params;
    this.setState({
      status: '',
      movie: await movieAPI.getMovie(id),
    });
  }

  handleSubmit(updatedMovie) {
    this.setState({
      shouldRedirect: true,
      movie: movieAPI.updateMovie(updatedMovie),
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect exact to="/" />;
    if (status === 'loading') return <Loading />;
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
