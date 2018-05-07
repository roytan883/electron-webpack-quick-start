import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('app');

function render() {
  const App = require('./App').default;
  ReactDOM.render(<App />, root);
}

if (module.hot) {
  module.hot.accept('./App', render);
}

render();