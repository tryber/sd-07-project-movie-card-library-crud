import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList.js';
import MovieDetails from './pages/MovieDetails.js';
import NewMovie from './pages/NewMovie.js';
import EditMovie from './pages/EditMovie.js';
// import * as movieAPI from './services/movieAPI.js';
import NotFound from './pages/NotFound.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={MovieList} />
        <Route path = "/movies/new" component={NewMovie} />
        <Route exact path = "/movies/:id" component={MovieDetails} />
        <Route path = "/movies/:id/edit" component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

// fetchDog() {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(result => this.setState({ data: result }));
// }