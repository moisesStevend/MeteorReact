import React,{Component} from 'react';
import '../styles/App.css'
import Xilofono from './Xilofono';

export default class App extends Component{
  constructor(props){
  	super(props);
    this.notas=["DO","RE","MI","FA","SOL","LA","SI"];
  }
  render(){
    return(
      <div >
        <Xilofono notas={this.notas}/>
      </div>
    );
  }
}
/*
mi_estilo={style_note} mi_estilo2={style_contenedor}
*/
