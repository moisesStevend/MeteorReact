import {Mongo} from 'meteor/mongo'
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

export const TasksDB = new Mongo.Collection('tasksdb');

if(Meteor.isServer){
  Meteor.publish("tasks_txrx", function(){
    //return TasksDB.find();
    return TasksDB.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'tasksdb.insert'(text){
     check(text,String);

     if(!this.userId){
       throw new Meteor.Error('no autorizado');
     }

     TasksDB.insert({
        text,
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username,
     })
   } ,
   'tasksdb.remove'(taskId) {
     check(taskId, String);
    /* if(!this.userId){
       alert('debe ingresar sesión')
       throw new Meteor.Error('no autorizado');
     }
     TasksDB.remove(taskId);*/
     const task = TasksDB.findOne(taskId);
      if (task.private && task.owner !== this.userId) {
        // If the task is private, make sure only the owner can delete it
        throw new Meteor.Error('not-authorized');
      }

      TasksDB.remove(taskId);
   },
   'tasksdb.setChecked'(taskId, setChecked) {
     check(taskId, String);
     check(setChecked, Boolean);

     //TasksDB.update(taskId, { $set: { checked: setChecked } });
     const task = TasksDB.findOne(taskId);
      if (task.private && task.owner !== this.userId) {
        // If the task is private, make sure only the owner can check it off
        throw new Meteor.Error('not-authorized');
      }

      TasksDB.update(taskId, { $set: { checked: setChecked } });
   },
   'tasksdb.setPrivate'(taskId, setToPrivate) {
    check(taskId, String);
    check(setToPrivate, Boolean);

    const task = TasksDB.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    TasksDB.update(taskId, { $set: { private: setToPrivate } });
  },
});
