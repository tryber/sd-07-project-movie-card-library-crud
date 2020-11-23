import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1 className="header">Movie Card Library CRUD</h1>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
