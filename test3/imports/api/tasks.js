import { Meteor } from 'meteor/meteor';
//var mqtt = require('mqtt');

export const Tasks = new Meteor.Collection('tasks');

//var client = mqtt.connect('mqtt://test.mosquitto.org');
/*
client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());

  //Meteor.publish('tasks', function() {
  //  return tasks.insert({ text: "Hello world!", createdAt: new Date() });
//  });
});
*/

//if (Meteor.isServer) {
  // This code only runs on the server

//}
