import {Meteor} from 'meteor/meteor';
import bNombre from '../fixtures.js';

  Meteor.publish('baseNombres', function() {
    return bNombre.find();
  });
