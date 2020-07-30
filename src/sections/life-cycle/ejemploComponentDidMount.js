import React, { Component } from 'react'

class EjemploComponentDidMount extends Component {
    constructor(props){
        super(props)
        console.log('constructor');
        this.state = { scroll: 0 }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        //Si realizamos cambios en esta clase, se renderizara de nuevo la pagina con los cambios
        //ya que previamente se habia cargado todo el arbol del DOM y posteriormente hemos cambiado
        //el valor del estado 'scroll' mediante el evento de scroll.
        document.addEventListener('scroll', () => {
            this.setState({ scroll: window.scrollY })
        })
    }

    render(){
        console.log('render');
        return (
            <div>
                <p>Mi scroll es: {this.state.scroll}</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Mi scroll es: {this.state.scroll}</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Mi scroll es: {this.state.scroll}</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
                <p>Esto es un texto de ejemplo</p>
            </div>
        )
    }
}


export default EjemploComponentDidMount;