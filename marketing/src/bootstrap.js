import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';  // react-router-dom internally makes use of this library

import App from './App';

// Mount function to start up the app
const mount = (element, { onNavigate }) => {
  const memoryHistory = createMemoryHistory();
  if (onNavigate) {
    memoryHistory.listen(onNavigate);
  }
  ReactDOM.render(
    <App history={memoryHistory} />,
    element
  );
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname: currentPathname } = memoryHistory.location;
      if (currentPathname !== nextPathname) {
        memoryHistory.push(nextPathname);
      }
    },
  };
};

// 1. If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  // Assuming our container doesn't have an element with id '_marketing-dev-root'
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot, {});
  }
}

// 2. We are running through container and we should export the mount function
export {
  mount,
};
