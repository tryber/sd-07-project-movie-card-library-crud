import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
   created: false,
    }
  }

  handleSubmit(newMovie) { 
    movieAPI.createMovie(newMovie).then(() => this.setState({ created: true }));
  }

  render() 
  le = this.created.setState
  if (le) {
    return <Redirect to="/" />;
  } else {
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;

