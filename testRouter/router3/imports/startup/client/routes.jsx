import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Accounts, STATES } from 'meteor/std:accounts-ui';
import {App} from '../../ui/pages/App.jsx'
import {Index} from '../../ui/pages/Index.jsx'

export function renderRoutes(){
  return(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ Index } />
        <Route path="/signin" component={() => <Accounts.ui.LoginForm formState={STATES.SIGN_IN} />} />
        <Route path="/signup" component={() => <Accounts.ui.LoginForm formState={STATES.SIGN_UP} />} />
      </Route>
    </Router>
  );
}
//<Route path="/hello/:name" component={ Hello } />
