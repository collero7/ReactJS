import React, { Component } from 'react';

class Contador extends Component {

  constructor (props){
    super(props)
    this.state = {contador: this.props.contadorInicial}
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }

  render(){
    const {name} = this.props
    const contador = 0;

    return (
      <div>
        <p>Componente padre: {this.state.contador}</p>
        <ContadorNumero edad={30} numero={this.state.contador} />
        <p>{name}</p>
      </div>
    )
  }
}

Contador.defaultProps = {
  contadorInicial: 8
}

class ContadorNumero extends Component{

  render(){

    const {edad, numero} = this.props
    
    return (
      <div>
        <p>Edad: {edad}</p>
        <span>Componente hijo: {numero}</span>
      </div>
    )
  }
}

ContadorNumero.defaultProps = {
  edad: 28
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador contadorInicial= {70} name="Cristopher"/>
      </div>
    );
  }
}


export default App;
