import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit() {
    // updatedMovie
  }

  fetchMovie() {
    this.setState(async () => {
      const movie = await movieAPI.getMovie(this.props.match.params.id);
      this.setState({ movie, loading: false });
      console.log(this.props.match);
    });
  }

  render() {
    const { loading, movie } = this.state;
    // const { shouldRedirect } = this.state;
    // if (shouldRedirect) {
    //   // Redirect
    // }

    return (
      <div className="movie-card">
        { loading ? <Loading /> :
        <div>
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
