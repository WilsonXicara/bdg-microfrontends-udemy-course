import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { LandingPage, PricingPage } from './pages';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mkt-',  // Prefix for 'marketing'
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={PricingPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
