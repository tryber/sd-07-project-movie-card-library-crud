import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async handleSubmit(updateMovie) {
    await movieAPI.updateMovie(updateMovie);
    this.setState({
      redirect: true,
    });
  }

  fetchMovie() {
    this.setState(async () => {
      const movie = await movieAPI.getMovie(this.props.match.params.id);
      this.setState({ movie, loading: false });
    });
  }

  render() {
    const { loading, movie, redirect } = this.state;
    if (redirect) {
      return <Redirect to={'/'} />;
    }
    return (
      <div>
        { loading ? <Loading /> :
        <div className="movie-card">
          <div className="movie-card-body" data-testid="edit-movie">
            <MovieForm movie={movie} onSubmit={this.handleSubmit} />
          </div>
          <div className="button-background">
            <Link className="button-link" to={'/'}>VOLTAR</Link>
          </div>
        </div> }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default EditMovie;
