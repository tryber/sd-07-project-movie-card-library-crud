import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components/index';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: 'notLoading',
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.functionStateChanger = this.functionStateChanger.bind(this);
  }

  componentDidMount() {
    const movieID = this.props.match.params.id;
    this.functionStateChanger(movieID);
  }

  async functionStateChanger(id) {
    this.setState({
      status: 'loading',
    });

    this.setState({
      movie: await movieAPI.getMovie(id),
      status: 'notLoading',
    });
  }


  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect from="/" to="/" />;
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

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
