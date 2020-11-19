import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
