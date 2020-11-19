import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, NewMovie, EditMovie } from './pages/index'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MovieList} />
      <Route path="/movies/:id" render={<MovieDetails {...props} />}/>
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" render={<EditMovie {...props} />} />
    </BrowserRouter>
  );
}

export default App;
