import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';
=======
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
>>>>>>> 09dffab150a908e43f97c472428607293c928f4e
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
<<<<<<< HEAD
import './App.css';
=======
import './App.css'
>>>>>>> 09dffab150a908e43f97c472428607293c928f4e

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="*" component={NotFound} />
      </BrowserRouter>
<<<<<<< HEAD
    </div>
=======
    </div>    
>>>>>>> 09dffab150a908e43f97c472428607293c928f4e
  );
}

export default App;
