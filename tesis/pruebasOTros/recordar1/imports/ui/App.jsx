import React,{Component} from 'react'
//import mqtt from 'mqtt'
import {Grafica} from './Receiver.jsx'
import mqtt from 'wt-mqtt'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      msj: '0',
    }
  }
  componentWillMount(){
    this.client  = mqtt.connect('ws://10.10.50.58:9001')
    this.client.subscribe('presence')

    this.client.on('connect', function () {
      console.log('mqtt connected')
    })

    this.client.on('message', (topic, message)=>{
      console.log(message.toString());
      this.setState({
        msj: message.toString(),
      });

      //this.client.publish('presence','ok')
      //this.client.end()
    })
  }
  render(){
    return(
      <div>
        <div>{this.state.msj}</div>
        <Grafica/>
      </div>

    );
  }
}
