import React, {Component} from 'react';

class Name extends Component{

    render(){
let {data} = this.props;

        return (
            <p>Name: {data}</p>
        );
    }
}

export default Name;