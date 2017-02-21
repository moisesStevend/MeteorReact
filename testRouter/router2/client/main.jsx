import {render} from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {renderRoutes} from '../imports/startup/client/routes.jsx'

Meteor.startup(function(){
  render(renderRoutes(),document.getElementById('render-target'));
});
