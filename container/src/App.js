import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MarketingApp } from './components/remote-apps';
import { Header } from './components';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};
