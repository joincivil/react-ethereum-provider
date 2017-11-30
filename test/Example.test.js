import "babel-polyfill"
import "raf"

import React from 'react';
import ReactDOM from 'react-dom'


import App from './ExampleApp'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
})
