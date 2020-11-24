import React, { Component } from 'react';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  handleSubmit(updatedMovie) {
  }

  fetchMovie() {
    this.setState(async () => {
      const movie = await movieAPI.getMovie(this.props.match.params.id);
      this.setState({ movie: movie, loading: false });
    });
  }

  componentDidMount() {
    this.fetchMovie();
  }
  render() {
    const { loading, shouldRedirect, movie } = this.state;
    // if (shouldRedirect) {
    //   // Redirect
    // }

    return (      
      <div>
        { loading ? <Loading /> :
        <div data-testid="edit-movie">
          <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        </div> }
      </div>
    );
  }
}

export default EditMovie;
