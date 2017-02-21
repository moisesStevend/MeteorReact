import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
// /'fit-content',
const miStyle={
  backgroundColor: 'rgb(162, 252, 104)',
  width: '100px',
  height: '40px',
  border: '2px solid',
  borderRadius: '15px',
}

const miStyle2={
  backgroundColor: 'rgb(109, 211, 221)',
  width: '500px',
  height: '600px',
}

export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      posAntX:0,
      posAntY:0,
      posX: 126,
      posY: 233,
      hab: false,
    }
  }
  handleStart(event, ui){

  }
  handleDrag(event, ui){
    console.log('drag',event)
    this.setState({
      posAntX: ui.x,
      posAntY: ui.y,
    })

    if(this.state.posAntY<260 && this.state.posAntX<400){
      console.log('Event: ', ui.x);
      console.log('Position: ', ui.y);
      this.setState({
        posX: ui.x,
        posY: ui.y,
      })
    }else{

    }
  }
  handleStop(event, ui){
    console.log('stop')
    console.log('Event: ', ui.x);
    console.log('Position: ', ui.y);
  }
  render() {
    return (
      <div style={miStyle2}>
        <div >
          <table className="table">
            <thead>
              <tr>
                <th>LUNES</th>
                <th>MARTES</th>
                <th>MIERCOLES</th>
                <th>JUEVES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <Draggable
          handle=".handle"
          start={{x: 126, y: 233}}
          moveOnStartChange={false}
          disabled= {this.state.hab}
          grid={[1, 1]}
          zIndex={100}
          position={{x: this.state.posX, y: this.state.posY}}
          onStart={this.handleStart.bind(this)}
          onDrag={this.handleDrag.bind(this)}
          onStop={this.handleStop.bind(this)}>
          <div style={miStyle}>
            <div className="handle text-center">TITULAR</div>
            <div className="handle text-center">Seras titular</div>
          </div>
        </Draggable>

        <Draggable
          handle=".handle2"
          moveOnStartChange={false}
          disabled= {false}
          grid={[1, 1]}
          zIndex={100}
          position={{x: 260, y: 193}}
          onStart={this.handleStart2}
          onDrag={this.handleDrag2}
          onStop={this.handleStop2}>
          <div style={miStyle}>
            <div className="handle2 text-center">SUPLENTE</div>
            <div className="handle2 text-center">Seras suplente</div>
          </div>
        </Draggable>
      </div>
    );
  }
}
/*
<Draggable
  axis="x"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  start={{x: 0, y: 0}}
  position={null}
  moveOnStartChange={false}
  grid={[25, 25]}
  zIndex={100}
  onStart={this.handleStart.bind(this)}
  onDrag={this.handleDrag.bind(this)}
  onStop={this.handleStop.bind(this)}>
  <div style={miStyle}>
    <div className="handle">Drag from here</div>
    <div className="handle">This readme is really dragging on...</div>
  </div>
</Draggable>


  if(ui.y>260 || ui.x>280){
    if(ui.y>260){
      this.setState({
        posY: 260,
      })
    }
    if(ui.x>280){
        this.setState({
          posX: 280,
        })
    }
  }else if(ui.y<260 && ui.x<280){
    this.setState({
      posX: ui.x,
      posY: ui.y,
    })
  }

*/
