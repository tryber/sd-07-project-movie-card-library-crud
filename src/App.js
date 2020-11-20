import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        <switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route component={NotFound} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
