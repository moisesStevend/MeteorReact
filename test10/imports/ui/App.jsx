import React, {Component} from 'react'
import Plotter from './Plotter.jsx'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      count_b: false,
      name: "run",
    }
    this.camb=this.camb.bind(this);
  }
  componentDidMount() {
  }
  camb(){
    this.setState({count_b: !this.state.count_b});

    if(this.state.count_b==true){
      this.setState({name: "run",})
      //console.log("stop");
    }else if(this.state.count_b==false){
      this.setState({name: "stop",})
      //console.log("run");
    }
  }
  render(){
    //var ini=12;
    return(
      <div>
        <header>
          Exportando
        </header>

        <Mi_up init={12} pare={30} count_a={this.state.count_b}/>
        <button onClick={this.camb}>{this.state.name}</button>

      </div>
    );
  }
}//figure={this.state.figure}

class Mi_up extends Component{
  constructor(props){
    super(props);
    this.state={
      data: this.props.init,
    }
    this.up=this.up.bind(this);
    this.reiniciar=this.reiniciar.bind(this);
  }
  componentDidMount(){
    setInterval(function(){
      if(this.props.count_a==true){
        if(this.state.data==this.props.pare){
          this.setState({
            data: (this.props.init),
          });
        }else{
          this.setState({data: (this.state.data+1),});
       }
     }
   }.bind(this), 500);
  }
  up(){
    if(this.state.data==(this.props.pare)){
      this.setState({
        data: (this.props.init),
      });
    }else{
      this.setState({
        data: (this.state.data+1),
      });
    }
  }
  reiniciar(){
    this.setState({
      data: this.props.init,
    });
  }
  render(){
    return(
      <div>
        <h3>{this.state.data}</h3>
        <button onClick={this.up}>clikme!</button>
        <button onClick={this.reiniciar}>reiniciar</button>
      </div>
    );
  }
}

Mi_up.defaultProps={
  init: 0,
  pare: 20,
  count_a: false,
}
