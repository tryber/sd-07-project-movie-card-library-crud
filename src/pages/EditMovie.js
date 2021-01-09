import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: {},
      loading: false,
      status: null,
    };

    this.fetchMovie = this.fetchMovie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchMovie() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then(((movie) => {
      this.setState({
        movie,
        loading: true,
      })
    }))
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState({
      status: 'loading',
    }, () => {
      movieAPI.updateMovie(updatedMovie)
      .then(() => {
        this.setState({
          status: '',
          shouldRedirect: true,
        })
      })
    })
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />
    }

    if (!loading) {
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
