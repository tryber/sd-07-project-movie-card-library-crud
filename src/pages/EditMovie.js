import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Loading } from '../components';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.setState({ status: true }, async () => {
      const { id } = this.props.match.params;
      console.log(parseFloat(id.substring(1)));
      console.log(this.props.match.params);
      const data = await movieAPI.getMovie(parseFloat(id.substring(1)));
      this.setState({ movie: data, status: false });
    });
  }
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    console.log(this.state);
    if (shouldRedirect) {
      return (
        <Redirect to="/" />
      );
    }
    if (status) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.Shape().isRequired,
};

export default EditMovie;
