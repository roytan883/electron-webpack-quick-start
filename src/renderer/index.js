import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'antd-mobile/dist/antd-mobile.css';

const root = document.getElementById('app');

function render() {
  const App = require('./App').default;
  ReactDOM.render(<App />, root);
}

if (module.hot) {
  module.hot.accept('./App', render);
}

render();