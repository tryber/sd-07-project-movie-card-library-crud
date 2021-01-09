import React, { Component } from 'react';

class Loading extends Component {
  render() {
    const { message } = this.props;
    return <div>{message}</div>;
  }
}

export default Loading;
