import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { MarketingApp, AuthApp } from './components/remote-apps';
import { Header } from './components';

const generateClassName = createGenerateClassName({
  productionPrefix: 'cnt-',  // Prefix for 'container'
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};
