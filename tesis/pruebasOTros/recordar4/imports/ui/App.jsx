import React,{Component} from 'react'
import {Ploteo1} from "./Ploteo1.jsx"

import {Parpadeo} from './Parpadeo.jsx'

export default class App extends Component{
  render(){
    return(
      <div>
        <Parpadeo/>        
        <Ploteo1/>
      </div>
    );
  }
}
