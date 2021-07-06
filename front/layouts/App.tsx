import { Redirect, Route, Switch } from 'react-router-dom';

import LogIn from '@pages/LogIn';
import React from 'react';
import SignUp from '@pages/SignUp';

const App = () => {
  return (
    <Switch>
      <Redirect exact path={'/'} to={'/login'} />
      <Route path={'/login'} component={LogIn} />
      <Route path={'/signup'} component={SignUp} />
    </Switch>
  );
};

export default App;
