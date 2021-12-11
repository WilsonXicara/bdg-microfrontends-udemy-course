import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { SigninPage, SignupPage } from './pages';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth-',  // Prefix for 'auth'
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SigninPage} />
            <Route path="/auth/signup" component={SignupPage} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
