import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldRedirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    // Função baseada no código de 'herculesgabriel'
    const { history } = this.props;
    history.push('/');
  }

  async handleSubmit(newMovie) {
    const requestNewMovie = await movieAPI.createMovie(newMovie);
    if (requestNewMovie === 'OK') {
      this.setState({ shouldRedirect: true });
    }
  }

  render() {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

NewMovie.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NewMovie;
