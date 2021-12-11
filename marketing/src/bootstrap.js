import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';  // react-router-dom internally makes use of this library

import App from './App';

// Mount function to start up the app
const mount = element => {
  const memoryHistory = createMemoryHistory();
  ReactDOM.render(
    <App history={memoryHistory} />,
    element
  );
};

// 1. If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  // Assuming our container doesn't have an element with id '_marketing-dev-root'
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// 2. We are running through container and we should export the mount function
export {
  mount,
};
