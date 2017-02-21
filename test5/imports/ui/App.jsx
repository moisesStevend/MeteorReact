import React, {Component,PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';
//import {RTI} from '../api/tasks.js';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      mi_service: '',
    };
  }
  componentWillMount() {
    Meteor.call("getLoginService", 'Rauuul',(error, service) => {
      if(error) {
        // handle error
      } else {
        this.setState({ mi_service: service });
      }
    });
  }
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
  render(){
    const { mi_service } = this.state;

    return(
      <div>
        <h2>App</h2>
        <p>{mi_service}</p>
        <p>{this.props.tasks}</p>
      </div>
    );
  }
}
//<p>{this.props.lec_mqtt._id}</p>
/*
App.propTypes = {
  tasks: PropTypes.object.isRequired,
};
*/
/*
<ul>
 {this.renderTasks()}
</ul>
*/
export default createContainer(() => {
  const mi_text = Meteor.subscribe('tasks2');
  console.log(mi_text);
//const mi_text =
  return {
    tasks: Tasks.findOne({"_id":"bcxpD7ymERaKPxY6p"}),//Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    //lec_mqtt: Tasks.find({}).fetch(),//Tasks.findOne({"_id":"KSDFEoCHhXRk7iJaB"})//Tasks.find({}).fetch(),//'niupi',//Tasks.find({}).fetch(),
    //lec_mqtt: RTI.find({}).fetch(),//Tasks.find({}).fetch(),//'niupi',//Tasks.find({}).fetch(),
  };
}, App);
