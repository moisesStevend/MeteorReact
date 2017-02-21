import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('mi_col');

if (Meteor.isServer) {
  Meteor.publish('tasks2', function() {
        //return Tasks.find({}, {sort: {date: -1},limit: 100});
        return Tasks.find();
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
  addMsgToCollection( msg);//msg);
});

var addMsgToCollection = Meteor.bindEnvironment(function(message) {
  Tasks.insert(message);
});

Meteor.methods({
        getLoginService(name){
            return 'Nombre: '+name;
        },
});
