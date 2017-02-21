import React, {Component, PropTypes} from 'react';
import mqtt from 'wt-mqtt'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      valor: 'moises',
    }
  }
  componentWillMount() {
    this.client = mqtt.connect('ws://test.mosquitto.org:8080')
    this.client.subscribe('diapos')

    this.client.on('connect', () => {
      console.log('mqtt connected')
    })

    this.client.on('message', (topic, payload) => {
        this.setState({
          valor: payload.toString()
        })
    })
  }
  render(){
    const { valor} = this.state
    return(
      <p>{valor}</p>
    );
  }
}
