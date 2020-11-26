import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return <div data-testid="404-error">Página não encontrada</div>;
  }
}

export default NotFound;
