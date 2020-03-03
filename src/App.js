import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Hello extends Component {
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {
    const { arrayOfNumbers, isActivated, multiply, objectWithInfo, title} = this.props

    const textoSegunBool = isActivated ? "Verdadero" : "Falso"
    const mappedNumbers = arrayOfNumbers.map(multiply)

  return (
    <div>
      <h1>{this.props.text}</h1>
      {title}
      <p>{mappedNumbers.join(', ')}</p>
      <p>{objectWithInfo.key}</p>
    </div>
  )
  }
  
}

//Props por defecto
Text.defaultProps = {
  text: 'Titulo por defecto'
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hello title="Esto es un ejemploOO"/>
        </header>
      <Text
        arrayOfNumbers = {[2, 6, 4]}
        objectWithInfo={{key: 'First value', key2: 'Second value'}}
        isActivated
        multiply={(number) => number * 4 }
        number={2} 
        title={<h1>Este es el titulo</h1>}

      />
      </div>
    );
  }
}

export default App;
