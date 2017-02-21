import React, {Component} from 'react';

export default class Xilofono extends Component{
  constructor(props){
    super(props);
    this.notas=this.props.notas;
    this.Clikme=this.Clickme.bind(this);
    this.musica=this.musica.bind(this);
    this.mi_tono=['MI','MI','FA','SOL','SOL','FA','MI','RE','DO','DO','RE','MI','MI','RE','RE','MI','MI','FA','SOL','SOL','FA','MI','RE','DO','DO','RE','MI','RE','DO','DO',
                  'RE','MI','DO','RE','MI','FA','MI','DO','RE','MI','FA','MI','RE','DO','RE','SOL','MI','MI','FA','SOL','SOL','FA','MI','RE','DO','DO','RE','MI','RE','DO','DO'
                ];
    console.log("init");
    console.log(this.mi_tono.length);
    this.tiempos=[500,100,100,100,100,100,100,100,100,100,100,100,100,100,100]
  }
  musica(){
    var i=0;

   var timer=setInterval(function(){
      console.log(i);
      this.Clickme(this.props.sound[this.mi_tono[i]])
      i=i+1;
      if(i>=this.mi_tono.length){
        i=0;
        clearInterval(timer);
      }
    }.bind(this), 600);
  }
  Clickme(e){
    console.log(e);
    new Audio("sound/"+e+".mp3").play();
  }
  render(){
    return(
      <div>
        <div style={this.props.mi_estilo2}>
          {this.notas.map((e)=>(
            <div key={e} style={this.props.mi_estilo[e]} className="note" onClick={()=>this.Clickme(this.props.sound[e])}>{e}</div>
          ))}
        </div>

        <Sonido/>

        <div style={this.props.style_btn} onClick={this.musica}>canción</div>
      </div>
    );
  }
}

Xilofono.defaultProps={
  sound: {"DO":"C","RE":'D',"MI":'E',"FA":'F',"SOL":'G',"LA":'A',"SI":'B'},
  mi_estilo: {
                "DO": {
                      width: '60px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      background: '#02B65E',
                      height: '300px',

                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      alignContent: 'center',
                      flexDirection: 'column',

                      fontFamily: 'Helvetica, Arial, Sans-Serif',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      userSelect: 'none',
                    },
                 "RE":
                  {
                    width: '60px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    background: '#F0D20E',
                    height: '280px',

                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',

                    fontFamily: 'Helvetica, Arial, Sans-Serif',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    userSelect: 'none',
                  }
                ,
                "MI":
                  {
                    width: '60px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    background: '#D04559',
                    height: '260px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    fontFamily: 'Helvetica, Arial, Sans-Serif',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    userSelect: 'none',
                  }
                ,
                "FA":{
                    width: '60px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    background: '#E28C12',
                    height: '240px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    fontFamily: 'Helvetica, Arial, Sans-Serif',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    userSelect: 'none',
                  }
                ,
                "SOL":
                  {
                    width: '60px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    background: '#8E83C8',
                    height: '220px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    fontFamily: 'Helvetica, Arial, Sans-Serif',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    userSelect: 'none',
                  }
                ,
                "LA":
                  {
                    width: '60px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    background: '#0285D4',
                    height: '200px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    fontFamily: 'Helvetica, Arial, Sans-Serif',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    userSelect: 'none',
                  }
                ,
                "SI":
                  {
                    width: '60px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    background: '#FDC1C0',
                    height: '180px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',
                    fontFamily: 'Helvetica, Arial, Sans-Serif',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    userSelect: 'none',
                  }
                },
    mi_estilo2:
                {
                  width: '510px',
                  height: '300px',
                  margin: '0 auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '40px',
                },
      style_btn: {
                  margin: '20px auto',
                  width: '560px',
                  height: '50px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  background: '#3102b6',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'Helvetica, Arial, Sans-Serif',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px',
                  userSelect: 'none',
                },
}
//const style_contenedor=
/*
const style_note={
  "DO":
    {
      width: '60px',
      borderRadius: '20px',
      cursor: 'pointer',
      background: '#02B65E',
      height: '300px',

      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',

      fontFamily: 'Helvetica, Arial, Sans-Serif',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      userSelect: 'none',
    }
  ,
   "RE":
    {
      width: '60px',
      borderRadius: '20px',
      cursor: 'pointer',
      background: '#F0D20E',
      height: '280px',

      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',

      fontFamily: 'Helvetica, Arial, Sans-Serif',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      userSelect: 'none',
    }
  ,
  "MI":
    {
      width: '60px',
      borderRadius: '20px',
      cursor: 'pointer',
      background: '#D04559',
      height: '260px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      userSelect: 'none',
    }
  ,
  "FA":{
      width: '60px',
      borderRadius: '20px',
      cursor: 'pointer',
      background: '#E28C12',
      height: '240px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      userSelect: 'none',
    }
  ,
  "SOL":
    {
      width: '60px',
      borderRadius: '20px',
      cursor: 'pointer',
      background: '#8E83C8',
      height: '220px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      userSelect: 'none',
    }
  ,
  "LA":
    {
      width: '60px',
      borderRadius: '20px',
      cursor: 'pointer',
      background: '#0285D4',
      height: '200px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      userSelect: 'none',
    }
  ,
  "SI":
    {
      width: '60px',
      borderRadius: '20px',
      cursor: 'pointer',
      background: '#FDC1C0',
      height: '180px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Helvetica, Arial, Sans-Serif',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
      userSelect: 'none',
    }
  }

*/

class Sonido extends Component{
  constructor(props){
    super(props);
    this.sound=["C",'D','E','F','G','A','B'];
  }
  ruta(e){
    return "sound/"+e+".mp3";
  }
  componentDidMount(){
    console.info('[AudioPlayer] componentDidMount...');
  }
  render(){
    console.info('[AudioPlayer] render...');
    return(
      <div>
        {this.sound.map((e)=>(
          <audio ref={e} src={this.ruta(e)} key={e}></audio>
        ))}
      </div>
    );
  }
}
