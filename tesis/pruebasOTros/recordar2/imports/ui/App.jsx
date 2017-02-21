import React,{Component} from 'react'
import {Parpadeo} from './Parpadeo.jsx'
import {DB13} from '../api/tasks.js'

import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

export class App extends Component{
  func2(){
    var x0 = [];
    var y0 = [];
    var x1 = [];
    var y1 = [];
    var x2 = [];
    var y2 = [];

    for (var i = 0; i < 500; i ++)
    {
    	x0[i] = Math.random() + 1;
    	y0[i] = Math.random() + 1.5;
    }

    for (var i = 0; i < 100; i ++)
    {
    	x1[i] = Math.random();
    	y1[i] = Math.random() + 1;
    }

    for (var i = 0; i < 500; i ++)
    {
    	x2[i] = Math.random()*2;
    	y2[i] = Math.random()*3;
    }

    var trace1 = {
      x: x0,
      y: y0,
      mode: 'markers',
      marker: {
        symbol: 'circle',
        opacity: 0.7,
    	 color:'rgb(200,111,200)',
      },
      type: 'scatter',
    };
    var trace2 = {
      x: x1,
      y: y1,
      mode: 'markers',
      marker: {
        symbol: 'square',
        opacity: 0.7,
    	 color:'cyan',
      },
      type: 'scatter'
    };
    var trace3 = {
      x: x2,
      y: y2,
      type: 'histogram2d',
      colorscale : [['0' , 'rgb(0,225,100)'],['1', 'rgb(100,0,200)']],

    };

    return [
      trace1, trace2, trace3
    ];
  }
  func1(){
    var x = [];
    var y = [];
    for (var i = 0; i < 500; i ++) {
    	x[i] = Math.random();
    	y[i] = Math.random() + 1;
    }

    //var data = [
    return [
        {
          x: x,
          y: y,
          histnorm: 'probability',
          autobinx: false,
          xbins: {
            start: -3,
            end: 3,
            size: 0.1
          },
          autobiny: false,
          ybins: {
            start: -2.5,
            end: 4,
            size: 0.1
          },
          colorscale: [['0', 'rgb(12,51,131)'], ['0.25', 'rgb(10,136,186)'], ['0.5', 'rgb(242,211,56)'], ['0.75', 'rgb(242,143,56)'], ['1', 'rgb(217,30,30)']],
          type: 'histogram2d'
        }
      ];
  }
  renderTasks(){
    return DB13.find({}, {sort:{createdAt:-1}}).fetch().map((e)=>(
      <li key={e._id}> {e.text}</li>
    ))
  }
  render(){
    let data = [
      {
        type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
        x: [1, 2, 3],     // more about "x": #scatter-x
        y: [6, 2, 3],     // #scatter-y
        marker: {         // marker is an object, valid marker keys: #scatter-marker
          color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
        }
      },
      {
        type: 'bar',      // all "bar" chart attributes: #bar
        x: [1, 2, 3],     // more about "x": #bar-x
        y: [6, 2, 3],     // #bar-y
        name: 'bar chart example' // #bar-name
      }
    ];
    let layout = {                     // all "layout" attributes: #layout
      title: 'simple example',  // more about "layout.title": #layout-title
      xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
        title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
      },
      annotations: [            // all "annotation" attributes: #layout-annotations
        {
          text: 'simple annotation',    // #layout-annotations-text
          x: 0,                         // #layout-annotations-x
          xref: 'paper',                // #layout-annotations-xref
          y: 0,                         // #layout-annotations-y
          yref: 'paper'                 // #layout-annotations-yref
        }
      ]
    };
    let config = {
      showLink: false,
      displayModeBar: true
    };
    return(
      <div>
        <ul>
          hi
        </ul>
        <Parpadeo/>
        <PlotlyComponent className="whatever" data={data} layout={layout} config={config}/>
        <PlotlyComponent className="whatever" data={this.func1()} layout={layout}/>
    </div>
    );
  }
}
//DB13.find().fetch().map((t)=>(
      //<li key={t._id}>{t.text}</li>
    //))

//<Plotter figure={this.func1()}/>
//<Plotter figure={this.func2()}/>
class Plotter extends React.Component {
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
