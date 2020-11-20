import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const id = this.props.match.params.id;
  }

  async handleSubmit(updatedMovie) {
    //movieAPI.updateMovie(updatedMovie)
    this.setState({status: '', shouldRedirect: true});
    console.log(this.props)
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
    }

    if (status === 'loading') {
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
