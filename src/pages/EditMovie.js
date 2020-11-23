import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, () => {
      movieAPI.getMovie(id)
        .then((response) => this.setState({
          movie: response,
          loading: false,
        }));
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    // const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;
    return (
      <div data-testid="edit-movie">
        <h1>Edit Movie</h1>
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
