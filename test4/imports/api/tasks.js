import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  Meteor.publish('tasks', function() {
        //return Tasks.find({}, {sort: {date: -1},limit: 100});
        return Tasks.find({});
    });
}

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');

client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());

  var msg = {
            text: message.toString(),
            topic: topic,
        };
  addMsgToCollection(msg);
});

var addMsgToCollection = Meteor.bindEnvironment(function(message) {
    Tasks.insert(message);
});
