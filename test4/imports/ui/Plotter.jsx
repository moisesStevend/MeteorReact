import React from 'react';
//import Plotly from 'plotly.js';
//Plotly = require('plotly.js');

export default class Plotter extends React.Component {
  componentDidMount() {
    Plotly.newPlot('plot', this.props.figure)
    console.log("newPlot")
  }
  componentDidUpdate(){
    Plotly.newPlot('plot', this.props.figure)
    console.log("update Plot")
  }
  render() {
    return (
      <div id="plot" style={{width:"100%", height:"600px"}}></div>
    )
  }
}
