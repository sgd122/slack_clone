import { Redirect, Route, Switch } from 'react-router-dom';

import React from 'react';
import loadable from '@loadable/component';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Channel'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path={'/'} to={'/login'} />
      <Route path={'/login'} component={LogIn} />
      <Route path={'/signup'} component={SignUp} />
      <Route path={'/workspace/sleact/channel/일반'} component={Channel} />
    </Switch>
  );
};

export default App;
