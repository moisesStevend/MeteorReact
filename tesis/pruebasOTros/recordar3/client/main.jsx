import React from 'react'
import {Meteor} from 'meteor/Meteor'

Meteor.startup(function(){
  render(<App/>,document.getElementById('render-target'));
});
