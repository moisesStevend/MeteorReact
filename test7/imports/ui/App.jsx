import React, { Component, PropTypes } from 'react';
import rd3 from 'react-d3'
import {LineChart} from 'react-d3'
import mqtt from 'wt-mqtt'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      valor: 'moises',
      values_state: [{x: 0, y: 0}],
    }
  }
  componentWillMount() {
    this.client = mqtt.connect('ws://test.mosquitto.org:8080')
    this.client.subscribe('data_sin')

    this.client.on('connect', () => {
      console.log('mqtt connected')
    })

    this.client.on('message', (topic, payload) => {
      //console.log(payload.toString())
        let json = JSON.parse(payload)
        //console.log(json.length)
        //console.log(json)r
        //console.aleatorialog(payload.toString())
        dict2=[]

        for(i=0;i<json.length;i++){
          dict2.push({x: json[i][0], y: json[i][1]})
        }

        console.log(dict2)

        this.setState({
          valor: payload.toString(),
          values_state: dict2
        })

    })

    this.client.on('error',()=>{
      console.log("error")
    })
    
    this.client.on('close',()=>{
      //this.client.end()
      console.log("close")
      //this.client = mqtt.connect('ws://test.mosquitto.org:8080')
      //this.client.subscribe('data_sin')

      //this.setState({
        //values_state: [{x: 0, y: 0}],
      //})
    })

    this.client.on('reconnect',()=>{
      console.log("reconexion")
      this.client.subscribe('data_sin')
    })
  }
  render(){
    const{ values_state } = this.state
    var lineData = [
      {
        name: 'data1',
        values: values_state,//[ { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 0.8 }, { x: 5, y: -1 }, { x: 6, y: -1 },{ x: 10, y: -1 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },/*,
      {
        name: 'Mi_plot',
        strokeWidth: 3,
        strokeDashArray: "5,5",
        values: values_state
      }*/
    ];
    const mi_style={
      backgroundColor: "rgb(60, 54, 52)",
      color: "rgb(227, 223, 221)",
      marginLeft: 100,
    }

    const mi_style2={
      marginLeft: 100,
    }

    return(
        <div>
          <header>
            <img className="col-md-12" src="imagenes/home.jpg"/>
            <h1 className="text-center">Meteor with D3js</h1>
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                  <li><a className="navbar-brand" href="www.google.com">Principal</a></li>
                  <li><a className="navbar-brand" href="www.facebook.com">Conocenos</a></li>
                  <li><a className="navbar-brand" href="www.facebook.com">servicios</a></li>
                </ul>
            </nav>
          </header>

          <div className="container pull-left">
            <div className="row ">
              <div className="col-sm-6 pull-left">
                <LineChart
                  legend={false}
                  data={lineData}
                  width='120%'
                  height={600}
                  viewBoxObject={{
                    x: 0,
                    y: 0,
                    width: 800,
                    height: 600
                  }}
                  title="Gráfica arduino"
                  yAxisLabel="Altitude"
                  xAxisLabel="Time (sec)"
                  domain={{x: [,10], y: [-10,]}}
                  yRange={[0,1023]}
                  gridHorizontal={true}
                  gridVertical={true}
                  showYGrid= {true}
                  showYAxis= {true}
                />
              </div>

              <div className="col-sm-6 pull-right">
                <aside  className="sidebar-nav-fixed affix ">
                  <h3 style={mi_style} className="text-center">
                    INFORMACION DE LA DATA
                  </h3>
                  <p style={mi_style2}>
                    Me largo no me importa
                    tu vida me llega al pincho
                    estaré lejos de aquí
                    en mis ojos ahora
                    solo hay odio y rencor
                    y es por tu culpa..por tu culpa

                    me largo no me importa tu vida
                    me llega al pincho
                    estaré lejos de aquí
                    en mis ojos ahora solo hay odio y rencor
                    y es por tu culpa por tu culpa
                    me largo no me importa
                    tu vida me llega al pincho
                    estaré lejos de aquí
                    en mis ojos ahora
                    solo hay odio y rencor
                    y es por tu culpa..por tu culpa

                    me largo no me importa tu vida
                    me llega al pincho
                    estaré lejos de aquí
                    en mis ojos ahora solo hay odio y rencor
                    y es por tu culpa por tu culpa
                  </p>
                </aside>
              </div>
              </div>
          </div>
        </div>
    );
  }
}

/*

{
  name: 'data1',
  values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 },{ x: 10, y: 5 } ],
  strokeWidth: 3,
  strokeDashArray: "5,5",
},
{
  name: 'data2',
  values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 },{ x: 12, y: 15 } ]
},
{
  name: 'data3',
  values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 },{ x: 22, y: 45 } ]
},
{
  name: 'data4',
  values: [ { x: 10, y: 0 }, { x: 11, y: 5 }, { x: 12, y: 8 }, { x: 3, y: 12 }, { x:14, y: 6 }, { x: 15, y: 14 }, { x: 16, y:12 },{ x: 12, y: 4 } ]
},
{
  name: 'data1',
  values : [ { x: 0, y: 1023 }]
},

*/
