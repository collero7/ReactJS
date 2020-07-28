import React, { Component } from 'react';

class App extends Component {

  //Constructor por defecto (se encuentra en el contexto)
  /*
  constructor (...args){
    super(...args)
  }
  */

  //Constructor modificado
  constructor (props){
    super(props)
    this.bandera = false;
    this.state = { mensajeInicial: 'mensaje inicial '}
  }

  //Funcion que cambia el texto del estado mensajeInicial cuando se pulsa el boton
  handleClick = () => {
    let mensaje1 = 'mensaje inicial ';
    let mensaje2 = 'mensaje cambiado ';
    this.setState( this.bandera ? { mensajeInicial: mensaje1 } : { mensajeInicial: mensaje2 })
    this.bandera = !this.bandera;
  }

  render(){
    return (
      <div className="App">
        <h4>Ciclo de montaje: constructor </h4>
        { this.state.mensajeInicial }
        <button onClick = { this.handleClick }> Cambiar mensaje </button>
      </div>
    );
  }
}

export default App;
