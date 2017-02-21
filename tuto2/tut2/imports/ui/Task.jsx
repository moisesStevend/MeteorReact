import React, {Component, PropTypes} from 'react'
import {TasksDB} from '../api/tasksDB.js'
import classnames from 'classnames';

export class Task extends Component{
  toggleChecked(){
    Meteor.call('tasksdb.setChecked', this.props.task._id, !this.props.task.checked);
/*
    TasksDB.update(this.props.task._id,{
      $set:{checked: !this.props.task.checked},
    })
*/
  }
  deleteThisTask(){
    //TasksDB.remove(this.props.task._id)
    Meteor.call('tasksdb.remove', this.props.task._id);
  }
  togglePrivate() {
    Meteor.call('tasksdb.setPrivate', this.props.task._id, ! this.props.task.private);
  }
  render(){
    const taskClassName=classnames({
        checked: this.props.task.checked,
        private: this.props.task.private,
      });
    //this.props.task.checked?'checked':'';
//  {this.props.task.}
    return(
      <li className={taskClassName}>

        <button className='delete' onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
            type='checkbox'
            readOnly
            checked={this.props.task.checked?true:false}
            onClick={this.toggleChecked.bind(this)}
          />

          { this.props.showPrivateButton ? (
              <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
                { this.props.task.private ? 'Private' : 'Public' }
              </button>
            ) : ''
          }

        <span className='text'>
          <strong>{this.props.task.username}</strong>: {this.props.task.text}
        </span>
      </li>
    );
  }
}

Task.PropTypes={
  task: PropTypes.object.isRequired,
  showPrivateButton: React.PropTypes.bool.isRequired,
}
