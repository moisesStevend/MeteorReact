import React from 'react'
import {render} from 'react-dom'
import {Meteor} from 'meteor/meteor'

import '../imports/api/accounts-config.js';

import {App} from '../imports/ui/App.jsx'

Meteor.startup(function(){
  render(<App/>,document.getElementById('render-target'));
});
