import React, { Component } from 'react';
import logo from './logo.svg';
import Plotly from 'react-plotlyjs';
import './App.css';

class App extends Component {
  render() {
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
   return (
     <Plotly className="whatever" data={data} layout={layout} config={config}/>
   );
 }
}

export default App;
