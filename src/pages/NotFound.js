import React, { Component } from 'react';
import notFound from './notfound.jpg';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div>
        <img className='notFoundImage' src={notFound} alt="Página não encontrada" />
        <div data-testid="404-error">Página não encontrada</div>
      </div>
    );
  }
}

export default NotFound;
