import React, { Component } from 'react';
import B from './B';
import C from './C';

class A extends Component {
    state = {
        fruits: ['Apple', 'Orange'],
        text: ''
    };

    saveValue = (value)=>{
        this.setState({
            text: value
        });
    };

    render() {
        const {fruits} = this.state;

        return (
            <div>
                <B 
                text = {fruits[0]}
                onSendValue = {this.saveValue}
                />
                <C text = {this.state.text}/>
        
            </div>
        );
    }
}

export default A;