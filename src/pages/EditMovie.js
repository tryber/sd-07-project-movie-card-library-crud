import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import { Loading } from '../components/index';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      loading: true,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.findMovie();
  }

  async findMovie() {
    const { id } = this.props.match.params;
    this.setState({ id });
    const movieById = await movieAPI.getMovie(id);
    this.setState({
      movie: movieById,
      loading: false,
    });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      status: true,
    });
  }

  render() {
    const { status, loading, movie } = this.state;
    if (status) {
      return <Redirect to="/" />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = { match: PropTypes.func.isRequired };

export default EditMovie;
