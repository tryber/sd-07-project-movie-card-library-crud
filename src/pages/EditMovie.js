import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);  
  }
  componentDidMount() {
    this.fetchMovie();
    // this.handleSubmit();
  }

  fetchMovie() {
    this.setState({ status: true }, async () => {
      // console.log(this.props)
      const { id } = this.props.match.params
      const response = await movieAPI.getMovie(id);
      this.setState({ status: false, movie: response });
      // console.log(this.state)
    });

  }

  async handleSubmit(updatedMovie) {
    // this.setState({ status: true }, async () => {
    //   await movieAPI.updateMovie(updatedMovie)
    //   this.setState({ status: false, shouldRedirect: true, });
    // });
    await movieAPI.updateMovie(updatedMovie)
    this.setState({ shouldRedirect: true, });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    // console.log(movie)

    return (
      status ? <Loading /> : shouldRedirect ? 
      <Redirect to="/" /> : 
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
