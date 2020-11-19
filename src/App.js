import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: '',
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path="/movies/:id"
            render={(props) => <MovieDetails {...props} movies={this.state.title} />}
          />
          <Route
            path="/movies/:id/edit"
            render={(props) => <EditMovie {...props} movies={this.state.movie} />}
          />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/" component={MovieList} />
          <Route component={NotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
