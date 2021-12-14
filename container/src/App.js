import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { Header } from './components';
import { LinearProgress } from './components/ui';

const MarketingAppLazy = lazy(() => import('./components/remote-apps/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/remote-apps/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'cnt-',  // Prefix for 'container'
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path="/auth">
              <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingAppLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};
