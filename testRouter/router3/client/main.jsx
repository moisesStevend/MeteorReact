import React from 'react'
import {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
//import {App} from '../imports/ui/pages/App.jsx';
import {renderRoutes} from '../imports/startup/client/routes.jsx'
//imports/startup/client/routes.jsx

Meteor.startup(function(){
  render(renderRoutes(),document.getElementById('render-target'));
});
