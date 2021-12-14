import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { SigninPage, SignupPage } from './pages';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth-',  // Prefix for 'auth'
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SigninPage onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <SignupPage onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
