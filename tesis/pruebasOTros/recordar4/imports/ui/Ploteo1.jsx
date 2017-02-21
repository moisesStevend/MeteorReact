import React,{Component} from 'react'
import createPlotlyComponent from 'react-plotlyjs'

import Plotly from 'plotly.js/dist/plotly-cartesian'

const PlotlyComponent = createPlotlyComponent(Plotly)

export class Ploteo1 extends Component{
  render(){
    let data=[
      {
        type: 'scatter',
        x: [1,2,3],
        y: [6,2,3],
        marker: {
          color: 'rgb(16, 37, 55)'
        }
      }
    ]
    return(
      <PlotlyComponent className="whatever" data={data}/>
    );
  }
}
