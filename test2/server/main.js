import { Meteor } from 'meteor/meteor';

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')

var mi_msj="";

client.on('connect', function () {
  client.subscribe('topic/image')
  //client.publish('presence', 'Hello mqtt')
  console.log("empezamos")
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic.toString())
  console.log(message.toString())
  mi_msj=message.toString();

  //export default mi_msj;
})
//client.end();
