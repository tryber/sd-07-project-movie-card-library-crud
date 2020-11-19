import React, { Component } from 'react';

import { MovieForm } from '../components';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      genre: '',
      rating: 0,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(updatedMovie) {
  // }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={() => true} />
      </div>
    );
  }
}

export default EditMovie;
