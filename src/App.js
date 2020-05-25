import React, { Component } from 'react';
import cars from './data/cars.json'

class Cars extends Component {
  render() {
    const { car } = this.props;
    return (
      <li>
        <p><strong>Marca: </strong>{car.company}</p>
        <span><strong>Modelo: </strong>{car.name}</span>
      </li>
    )
  }
}


class App extends Component {
  render(){
    return (
      <div className="App">
        <h4>Trabajando con listas con objetos</h4>
        <ul className="miColor">
          {cars.map(car => {
            return <Cars key={car.id} car={car} />
          })}
        </ul>
      </div>
    );
  }
}

export default App;
