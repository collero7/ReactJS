import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hola(props){
//   return <h3>Curso de ReacTt</h3>;
// }

// const Hola = (props) => <h3>{props.title}</h3>

class Hola extends Component {
  render(){
    return <h3>{this.props.title}</h3>
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Hola title="Esto es un ejemploOO"/>
          <p>Hola mundo, estoy usando React</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprende React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
