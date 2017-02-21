import { Meteor } from 'meteor/meteor';
//import Express from 'express';
import { HTTP } from 'meteor/http'

Meteor.startup(() => {
  // code to run on server at startup
  var response = HTTP.call( 'GET', 'http://jsonplaceholder.typicode.com/posts/1', {} );
  console.log( response );

});
/*
if (Meteor.isServer) {
  app = Express();
  app.get('/hello/world', function(req, res) {
    res.send(200, "Hello, World!");
    console.log(req);
  });
}
*/
