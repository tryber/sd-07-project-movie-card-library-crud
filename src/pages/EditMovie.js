import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  async handleSubmit(updatedMovie) {
    const updated = await movieAPI.updateMovie(updatedMovie);
    if(updated) this.setState({ shouldRedirect: true });
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { id } = this.props.match.params;
    const movieDetail = await movieAPI.getMovie(id);
    this.setState({ movie: movieDetail, isLoading: false });
  }

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    const loading = <p>Carregando...</p>
    return (
      <div data-testid="edit-movie">
        {
          isLoading ? loading :
          <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        }
      </div>
    );
  }
}

export default EditMovie;
