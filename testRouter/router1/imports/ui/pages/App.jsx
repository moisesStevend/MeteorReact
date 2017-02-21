import React,{Component} from 'react'
import {browserHistory} from 'react-router';
import { Router, Route, Link } from 'react-router'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection(null);

export class App extends TrackerReact(Component){
  constructor(props){
  	super(props);
  	this.state = {};
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault()
    browserHistory.push('/lists')
  }
  addResolution(e){
    e.preventDefault();
    var text=this.refs.resolution.value.trim();
    //console.log(text);

    Resolutions.insert({
      text:text,
      complete: false,
      createdAt: new Date()
    });

    this.refs.resolution.value="";
  }
  resolutions(){
      return Resolutions.find().fetch();
  }
  MapBase(data){
    return(<div>
        {data.map((e)=>(
          <li key={e.text}>{e.text} </li>
        ))}
      </div>)
  }
  render(){
    let res=this.resolutions();
    console.log(this.resolutions());
    return(
      <div>
        <a href="http://localhost:3000/lists">Clikme</a>
        <button onClick={this.handleClick}>Click2!!</button>
        <ul>
          <li><Link to="/about" activeStyle={{color:"red"}}>About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        <div>
          <strong>{this.props.children}</strong>
        </div>

        <form onSubmit={this.addResolution.bind(this)}>
          <input
            type="text"
            ref="resolution"
            placeholder="ingrese data!"
          />
        </form>
        <div>{res.length <1 ? 'cargando': this.MapBase(res)}</div>
      </div>
    );
  }
}
//res[0].text
export const Message = React.createClass({
  render() {
    console.log("Envio mensaje");
    return <h3>Message {this.props.params.id}</h3>
  }
})

export const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

export const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

export const Dashboard = React.createClass({
  render() {
    return (<div>Welcome to the app!</div>)
  }
})
