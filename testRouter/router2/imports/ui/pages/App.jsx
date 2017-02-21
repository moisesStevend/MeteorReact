import React, {Component, PropTypes} from 'react'
import { createContainer } from 'meteor/react-meteor-data';
import {browserHistory} from 'react-router';
//import Morris from 'morris'
//import bNombre from '../../api/BaseNombres/fixtures.js';

const mi_estilo={
  backgroundColor: "rgb(76, 108, 249)",
  color: "white",
  border: "1px solid",
  borderRadius: "15px",
  textAlign: 'center',

}

export class App extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    $('#myfirstchart').empty();
    var data = [
        { year: '2008', value: 20 },
        { year: '2009', value: 10 },
        { year: '2010', value: 5 },
        { year: '2011', value: 5 },
        { year: '2012', value: 20 }
    ];

    if (data) {
        new Morris.Bar({
          element: 'myfirstchart',
          data: [
            { date: '04-02-2014', value: 3 },
            { date: '04-03-2014', value: 1 },
            { date: '04-04-2014', value: 2 },
            { date: '04-05-2014', value: 1 },
            { date: '04-06-2014', value: 0 },
            { date: '04-07-2014', value: 19.9 }
          ],
          xkey: 'date',
          ykeys: ['value'],
          labels: ['Orders'],
          ymax: 20,
        });
    }
    /*
    Morris.Line({
        element: 'myfirstchart',
        data:    data,
        xkey:    'year',
        ykeys:   ['value'],
        labels:  ['Value'],
        resize:  true
    });
    */
  }
  render(){
    return(
      <div>
        <div style={mi_estilo}><h1>Bienvenidos</h1></div>
        <br/>
        <div style={{color:'rgb(76, 108, 249)',}}>{this.props.children}</div>
        <p>Sign</p>
        <Mi_form/>

        <div id="myfirstchart" style={{height: '250px',}}></div>
      </div>
    );
  }
}
//<div>{console.log({this.props.bnombre})}</div>
//
export class Mi_form extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  MapBase(data){
    return(<div>
        {data.map((e)=>(
          <li key={e.text}>{e.text} </li>
        ))}
      </div>)
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
     //alert('A name was submitted: ' + this.state.value);
     var ruta="user/"+this.state.value;
     //console.log(ruta);

     //console.log(this.props.bnombre)

     Meteor.call("add", this.state.value);
     Meteor.call("raw",function(error, result){
       if(error){
         console.log("error", error);
       }
       if(result){
         result.map((e)=>{
           console.log(e.text)
         })
       }
     });
     //browserHistory.push(ruta);
   }
  render(){
    //const {bnombre} = this.props
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
/*
Mi_form.defaultProps={
  bnombre: 'moi',
}
export default createContainer(() => {
  Meteor.subscribe('NBS.data');

  return {
    bnombre: bNombre.find({sort: { createdAt: -1 }}).fetch(),
  };
}, Mi_form);
*/
export class User extends Component{
  render(){
    return(
      <div>
        <h2>Ingresa tu usuario!</h2>
      </div>
    );
  }
}

export class Name extends Component{
  render(){
    return(
      <div>
        Hola {this.props.params.name}!
      </div>
    );
  }
}
