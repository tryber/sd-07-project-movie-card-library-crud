import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchToEdit = this.fetchToEdit.bind(this);
  }

  componentDidMount() {
    this.fetchToEdit();
  }

  fetchToEdit() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => {
      this.setState({ status: 'isOn', movie });
    });
  }
  // API atualiza o status e o valor de movie;
  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() =>
    this.setState({ shouldRedirect: true }));
  }
  // ao clique do botão, a página redireciona para /home;
  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
