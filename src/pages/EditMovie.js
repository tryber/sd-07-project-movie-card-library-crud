import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.callAPI = this.callAPI.bind(this);

    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };
  }

  callAPI() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);

      this.setState({
        loading: false,
        movie,
      });
    });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  componentDidMount() {
    this.callAPI();
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
