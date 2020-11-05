import React, {Component} from 'react';

class B extends Component{
state = {
    inputValue: '',
    params: {value: 0}

};

handleChange = (event)=>{
                
    // const params = {...this.state.params};
    // params.value = 15;

    // this.setState({
    //     inputValue: event.target.value,
    //     params: params
    // });

    this.setState({
        inputValue: event.target.value,
        params: {...this.state.params, value: this.state.params.value+1}
    });

};

handleClick = ()=>{
    const {inputValue} = this.state;
    this.props.onSendValue(inputValue);

    this.setState({
        inputValue: ''
    });
}

    render(){
        return (
            <>
            <div>{this.props.text}</div>
            <input 
            type="text" 
            value = {this.state.inputValue}
            placeholder='Input something...'
            onChange = {this.handleChange}
            />
            <input 
            type="button" 
            value='Send data'
            onClick = {this.handleClick}
            />
            </>
        );
    }
}

export default B;