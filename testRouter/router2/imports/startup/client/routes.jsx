import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {App, User, Name} from '../../ui/pages/App.jsx'

export const renderRoutes=function(){
  return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={User}/>
          <Route path="/user/:name" component={Name}/>
        </Route>
      </Router>
  );
}
