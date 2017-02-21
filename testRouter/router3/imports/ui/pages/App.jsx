import React,{Component} from 'react';

export class App extends Component{
  render(){
    return(
      <div>
        <h1>Cuentas de futbol</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
