import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchIDMovie = this.fetchIDMovie.bind(this);

    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchIDMovie();
  }

  async fetchIDMovie() {
    this.setState(
      { loading: true },
    async () => {
      const { id } = this.props.match.params;
      const movie = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie,
      });
    },
    );
  }

  async handleSubmit(updatedMovie) {
    const updateMovie = await movieAPI.updateMovie(updatedMovie);

    if (updateMovie === 'OK') {
      this.setState({
        shouldRedirect: true,
      });
    }
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;
