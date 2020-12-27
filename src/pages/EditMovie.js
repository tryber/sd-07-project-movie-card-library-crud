import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      movie: {},
      shouldRedirect: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }

  componentDidMount() {
    this.renderLoading();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: false });
  }

  async renderLoading() {
    const { match } = this.props;
    const filme = await movieAPI.getMovie(match.params.id);
    this.setState({
      status: false,
      movie: filme,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    return status ? <Loading /> : (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        {shouldRedirect ? false : <Redirect to="/" /> }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.number,
}.isRequired;
export default EditMovie;
