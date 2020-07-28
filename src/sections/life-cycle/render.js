import React, { Component } from 'react'

class Render extends Component {
    constructor(props){
        super(props)
        console.log('Constructor');
        this.state = { mensaje: 'mensaje inicial' }
    }

    componentWillMount() {
        console.log('ComponentWillMount')
    }

    render() {
        console.log('Render');
        return (
            <div>
                <h4>Ciclo de montaje: Render</h4>
                <p>{this.state.mensaje}</p>
            </div>
        )        
    }
}

export default Render