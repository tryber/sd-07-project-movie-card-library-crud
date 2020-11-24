import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { NewMovieLink } from './components/index';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <NewMovieLink />
    </BrowserRouter>
   
  );
}

export default App;
