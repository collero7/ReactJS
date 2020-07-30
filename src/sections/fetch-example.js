import React, { Component } from 'react';

class FetchExample extends Component {

    state = { bpi: {} }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res) => res.json())
        .then((data) => {
            this.setState({ bpi: data.bpi })
        })
    }

    _renderCurrencies(){
        console.log(this.state.bpi);
        const currencies = Object.keys(this.state.bpi) //['EUR', 'GBP', 'USD']
            return currencies.map(currency => (
                <div key = {currency}>
                    1 BTC is {this.state.bpi[currency].rate}
                    <span> {currency}</span>
                </div>
            ))
    }

    render() {
        return(
            <div>
                <h4>Fetch Example</h4>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample;