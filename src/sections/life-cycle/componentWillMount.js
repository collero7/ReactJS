import React, { Component } from 'react'

class ComponentWillMount extends Component {
    constructor(props){
        super(props)
        console.log('Constructor');
        this.state = { mensaje: 'mensaje inicial' }
    }

    componentWillMount() {
        console.log('ComponentWillMount');
        this.setState({ mensaje: 'mensaje modificado' })
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h4>Ciclo de montaje: ComponentWillMount</h4>
                <p>{this.state.mensaje}</p>
            </div>
        )        
    }
}

export default ComponentWillMount