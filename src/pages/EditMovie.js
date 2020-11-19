import React, { Component } from 'react';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMovieFromAPI = this.getMovieFromAPI.bind(this);

    this.state = {
      status : true,
      movie: {
        title: '', 
        storyline: '', 
        imagePath: '', 
        genre: '', 
        rating: 0, 
        subtitle: ''
      }
    };
    console.log('construiu');
  }

  handleSubmit(updatedMovie) {
  }

  async getMovieFromAPI() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);

    this.setState({status: false, movie: movie});        
  }

  componentDidMount () {

  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status) {
      return ( <Loading />);
    }

    return (
      <div data-testid="edit-movie">
        Buzzing
      </div>
    );

  }
}

export default EditMovie;
