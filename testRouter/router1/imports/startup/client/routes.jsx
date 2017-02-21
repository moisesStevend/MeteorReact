import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {App, About,Message, Dashboard, Inbox} from '../../ui/pages/App.jsx'
import {ListPageContainer, Hello} from '../../ui/pages/ListPageContainer.jsx'
import { IndexRoute } from 'react-router'



export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/messages/:id" component={Message} />
      <Route path="/hello/:name" component={ Hello } />
    </Route>
    <Route path="lists" component={ListPageContainer}/>
    <Route path="/about" component={About} />
    <Route path="/inbox" component={Inbox} />
  </Router>
);

//    <Route path="*" component={}/>
