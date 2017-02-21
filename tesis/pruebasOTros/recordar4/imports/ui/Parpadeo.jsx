import React,{Component} from 'react'
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

export class Parpadeo extends Component{
  constructor(props){
    super(props);
    this.state={
      aleatorio: 0,
      x: [],
      y: [],
    };
    this.Aleatorios=this.Aleatorios.bind(this);
  }
  componentDidMount() {
    this.set=setInterval(this.Aleatorios, 100);
  }
  componentWillUnmount() {
    clearInterval(this.set)
  }
  Aleatorios(){
    var xx = [];
    var yy = [];
    for (var i = 0; i < 800; i ++) {
      xx[i] = Math.random() + 1;
      yy[i] = Math.random() + 1;
    }
    this.setState({
      aleatorio: Math.random(),
      x: xx,
      y: yy,
    });
  }
  render(){
    return(
      <div>
        <MiGrafica x={this.state.x} y={this.state.y}/>
      </div>
    );
  }
}

class MiGrafica extends Component{
  constructor(props){
    super(props);
    this.func1=this.func1.bind(this);
  }
  func1(){
    xx=this.props.x
    yy=this.props.y
    return [
        {
          x: xx,
          y: yy,
          histnorm: 'probability',
          autobinx: false,
          xbins: {
            start: 1,
            end: 2,
            size: 0.05
          },
          autobiny: false,
          ybins: {
            start: 1,
            end: 2,
            size: 0.05
          },
          colorscale: [['0', 'rgb(12,51,131)'], ['0.25', 'rgb(10,136,186)'], ['0.5', 'rgb(242,211,56)'], ['0.75', 'rgb(242,143,56)'], ['1', 'rgb(217,30,30)']],
          type: 'histogram2d'
        }
      ];
  }
  render(){
    return(
      <div>
        <PlotlyComponent className="whatever" data={this.func1()}/>
      </div>
    );
  }
}
