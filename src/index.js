import React from 'react';
import ReactDOM from 'react-dom';
import "../scss/main.scss"

import App from './components/App';

ReactDOM.hydrate(
  <App title="The GitHub Cards App" />,
  document.getElementById('mountNode'),
);