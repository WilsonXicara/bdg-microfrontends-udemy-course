import { createApp } from 'vue';

import { DashboardPage } from './pages';

// Mount function to start up the app
const mount = (element) => {
  const app = createApp(DashboardPage);
  app.mount(element);
};

// 1. If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  // Assuming our container doesn't have an element with id '_dashboard-dev-root'
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// 2. We are running through container and we should export the mount function
export {
  mount,
};
