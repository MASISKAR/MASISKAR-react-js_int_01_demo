import React, { Component } from 'react';
import classes from './style.module.scss';

console.log(classes);

class Price extends Component {
    constructor(props) {
        super(props);

        this.state = {
            price: props.data,
        };

    }

    changeCurrency = () => {
        let { price } = this.state;
        let {rate} = this.props;
        
        let sign = price[price.length - 1];

        if (sign === "$") {
            price = parseFloat(price) * rate + "֏";
        }
        else if (sign === "֏") {
            price = parseFloat(price) / rate + "$";
        }

        this.setState({
            price: price
        });


    };

    render() {

        let { price } = this.state;

        return (
            <p className={classes.price}>
                Price: {price}
                <button
                    onClick={this.changeCurrency}
                >
                    Change currency
            </button>
            </p>
        );
    }
}

export default Price;