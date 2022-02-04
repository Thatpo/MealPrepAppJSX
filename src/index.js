import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing';

ReactDOM.render(
  <Router>
    <Routing />
  </Router>,
  document.getElementById('root')
);

