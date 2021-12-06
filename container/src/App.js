import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { MarketingApp } from './components/remote-apps';
import { Header } from './components';

const generateClassName = createGenerateClassName({
  productionPrefix: 'cnt-',  // Prefix for 'container'
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};
