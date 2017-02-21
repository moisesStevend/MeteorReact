import React,{Component} from 'react'
import {browserHistory} from 'react-router';


const mi_style={
  backgroundColor: "rgb(73, 217, 244)",
}
export class ListPageContainer extends Component{
  constructor(props){
    super(props);
    this.Retro=this.Retro.bind(this);
  }
  Retro(){
    browserHistory.goBack();
  }
  render(){
    return(
      <div style={mi_style}>
        <p>Segunda router!!</p>
        <button onClick={this.Retro}>Retro</button>
      </div>
    );
  }
}

export const Hello = ( { params, location } ) => (
  <h3>Howdy, { params.name }! You like { location.query.food }.</h3>
);
