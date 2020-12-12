import React, { Component, createRef } from 'react';


export default class RefDemo extends Component{
constructor(props){
    super(props);

    this.inputRef = createRef();
    this.state = {
        value: ''
    }
}

componentDidMount(){

    this.inputRef.current.focus();

}

handleChange = (event)=>{
    this.setState({
        value: event.target.value
    });
};

printValue1 = ()=>{
    console.log('value 1', this.inputRef.current.value);
    this.inputRef.current.value = "";
 };

printValue2 = ()=>{
console.log('value 2', this.state.value);
this.setState({
    value: ""
});
};

    render() {
    console.log('render');
        return (
            <div>
                <div>
                    <input 
                    type='text' 
                    ref = {this.inputRef}
                    />
                    <button
                    onClick={this.printValue1}
                    >Input 1</button>
                </div>

                <div>
                    <input 
                    type='text' 
                    value = {this.state.value}
                    onChange={this.handleChange}
                    />
                    <button
                    onClick={this.printValue2}
                    >
                    Input 2
                    </button>

                    <input 
                    type="checkbox"
                    checked = {this.props.checked}
                    />
                </div>
            </div>

        );
    }
}