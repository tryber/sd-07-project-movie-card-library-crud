import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
}

export default Loading;
