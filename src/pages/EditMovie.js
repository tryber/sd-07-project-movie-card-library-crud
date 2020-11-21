import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm } from '../components';
import { Loading } from '../components/index'
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
  async findMovie(id) {
    const movieById = await movieAPI.getMovie(id);   
    this.setState({
      movie: movieById,
      loading: false,
    })
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.setState({ id: id});
    this.findMovie(id);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      status: true
    })
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (status) {
      return <Redirect to="/" />
    }

    if (this.state.loading) {
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
