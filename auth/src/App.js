import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { LandingPage, PricingPage } from './pages';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mkt-',  // Prefix for 'marketing'
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={PricingPage} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
