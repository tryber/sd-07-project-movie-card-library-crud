import React, { Component } from 'react';
import loading from './loading.gif';

class Loading extends Component {
  render() {
    return (
      <div className="loadContainer">
        <img className="loadImage" src={loading} alt="Imagem de loading" />
        <p className="loadingText">Carregando...</p>
      </div>
    );
  }
}

export default Loading;
