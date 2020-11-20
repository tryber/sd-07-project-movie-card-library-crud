import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NotFound, MovieList } from './pages/index';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={MovieList} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

export default App;
