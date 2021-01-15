import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      status:true,
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => this.setState({
      movie,
      status: false,
    }));
  }

  handleSubmit(updatedMovie) {
		movieAPI.updateMovie(updatedMovie).then((movie) => this.setState({
      shouldRedirect: true,
    }));
	}

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />
    if(status) return <Loading />
    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
