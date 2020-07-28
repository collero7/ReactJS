import React, { Component } from 'react'
import ComponentWillMount from './sections/life-cycle/componentWillMount.js' //Importamos el componente

class App extends Component {
  render(){
    return (
      <div className="App">
        <ComponentWillMount />
      </div>
    );
  }
}

export default App;
