import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';  // react-router-dom internally makes use of this library

import App from './App';

// Mount function to start up the app
const mount = (element, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(
    <App history={history} />,
    element
  );
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname: currentPathname } = history.location;
      if (currentPathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// 1. If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  // Assuming our container doesn't have an element with id '_auth-dev-root'
  const devRoot = document.querySelector('#_auth-dev-root');
  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    });
  }
}

// 2. We are running through container and we should export the mount function
export {
  mount,
};
