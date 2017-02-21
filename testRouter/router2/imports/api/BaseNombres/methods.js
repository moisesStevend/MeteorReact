import {Meteor} from 'meteor/meteor'
import bNombre from './fixtures.js';

Meteor.methods({
  add(e){
    console.log(e);
     return bNombre.insert({'text':e})
  },
  raw(){
    return bNombre.find().fetch();
  }
});
