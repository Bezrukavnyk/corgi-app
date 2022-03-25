import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import WraperProvider from './components/WraperProvider/WraperProvider';

import './index.css';


ReactDOM.render(
  <WraperProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WraperProvider>,
  document.getElementById("root")
);

