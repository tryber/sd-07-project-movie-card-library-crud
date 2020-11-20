import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';


function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Link to="/">Movie List</Link>
      <Link to="/movies">Movie Details</Link>
      <Link to="/movies/new">New Movie</Link>
      <Link to="/edit">Edit</Link>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
