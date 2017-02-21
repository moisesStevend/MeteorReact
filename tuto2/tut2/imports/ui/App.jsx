import React,{Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Task} from './Task.jsx'
import {createContainer} from 'meteor/react-meteor-data'

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import {TasksDB} from '../api/tasksDB.js'

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }
  handleSubmit(e){
    e.preventDefault();

    const text=ReactDOM.findDOMNode(this.refs.textInput).value.trim();

/*    TasksDB.insert({
      text: text,
    })
*/  Meteor.call('tasksdb.insert', text);

    ReactDOM.findDOMNode(this.refs.textInput).value='';
/*
    TasksDB.insert({
       text,
       createdAt: new Date(), // current time
       owner: Meteor.userId(),           // _id of logged in user
       username: Meteor.user().username,  // username of logged in user
     });
     */
  }
  getTasks(){
    return [
      {_id:1, text:'hola 1'},
      {_id:2, text:'hola 2'},
      {_id:3, text:'hola 3'},
    ]
  }
  renderTasks(){
    return this.getTasks().map((e)=>(
      <Task key={e._id} task={e}/>
    ))
  }
  renderTasks2(){
    return this.props.dataDB.map((e)=>(
      <Task key={e._id} task={e}/>
      )
    );
  }
  renderTasks3(){
    return TasksDB.find({}, {sort:{createdAt:-1}}).fetch().map((e)=>(
      <Task key={e._id} task={e}/>
    ))
  }
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }
  renderTasks4() {
      let filteredTasks = this.props.dataDB;
      if (this.state.hideCompleted) {
        filteredTasks = filteredTasks.filter(dataDB => !dataDB.checked);
      }
      /*
      return filteredTasks.map((task) => (
        <Task key={task._id} task={task} />
      ));
      */
      return filteredTasks.map((task) => {
        const currentUserId = this.props.currentUser && this.props.currentUser._id;
        const showPrivateButton = task.owner === currentUserId;

        return (
          <Task
            key={task._id}
            task={task}
            showPrivateButton={showPrivateButton}
          />
        );
      });
    }
  render(){
    return(
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>

          <AccountsUIWrapper />
          {
            this.props.currentUser ?
            <form className='new-task' onSubmit={this.handleSubmit.bind(this)}>
              <input
                  type='text'
                  ref='textInput'
                  placeholder='ingresa nueva tarea'
                />
            </form>:''
          }
        </header>

        <ul>
          {this.renderTasks4()}
        </ul>
      </div>
    );
  }
}

App.PropTypes={
  dataDB: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
}

export default createContainer(() => {
  Meteor.subscribe("tasks_txrx");

  return{
    dataDB: TasksDB.find({}).fetch(),
    incompleteCount: TasksDB.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  }
},App);
