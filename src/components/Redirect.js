import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from '../pages/MovieList';

class Redirect extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={MovieList} />
      </BrowserRouter>
    );
  }
}

export default Redirect;
