import React, {Component} from 'react';
import Mi_Head from './Mi_Head.jsx'

class App extends Component{
  render(){
    return(
      <div>
        <Mi_Head/>
        <h3>Empezar</h3>
        <h3>{this.props.propBool?"True":"False"}</h3>
        <My_random/>
      </div>
    );
  }
}

App.propTypes={
  propBool: React.PropTypes.bool.isRequired,
}

App.defaultProps={
  propBool: false,
}

class My_random extends Component{
  constructor(props){
    super(props);
    this.actualizar=this.actualizar.bind(this);
    this.actualizar2=this.actualizar2.bind(this);
    this.state={
      data: 0,
    }
  }
  actualizar(){
    this.forceUpdate();
  }
  actualizar2(){
    var mi_data=this.state.data;
    this.setState({data:(mi_data+1)})
  }
  render(){
    return(
      <div>

        <button onClick={this.actualizar}>clickMe!</button>
        <h4>Random number: {Math.random()}</h4>
        <button onClick={this.actualizar2}>Aumentar</button>
        <h4>Aumento: {this.state.data}</h4>
      </div>
    );
  }
}

export default App;
