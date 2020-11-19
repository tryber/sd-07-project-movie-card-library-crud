import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieFromAPI = this.getMovieFromAPI.bind(this);

    this.state = {
      status: true,
      shouldRedirect: false,
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
      },
    };
  }

  componentDidMount() {
    this.getMovieFromAPI();
  }

  async getMovieFromAPI() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);

    this.setState({ status: false, movie });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      // Redirect
      return (<Redirect to="/" />);
    }

    return (
      <div data-testid="edit-movie">
        {status ? <Loading /> : <MovieForm movie={movie} onSubmit={this.handleSubmit} /> }
      </div>
    );
  }
}

export default EditMovie;
