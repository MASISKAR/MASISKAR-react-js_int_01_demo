import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            name: props.name
        }
    }


    state = {
        count: 0,
        prevCount: -1,
        nextCount: 1
    };


    // handleDecrementClick = () => {

    //     let { count } = this.state;
    //     count--;

    //     this.setState({
    //         count: count
    //     });

    // }
    

    // handleIncrementClick = () => {

    //     let { count } = this.state;
    //     count++;

    //     this.setState({
    //         count
    //     });

    // }

    handleButtonClick = (type) =>{
        let {count} = this.state;
console.log('count before', count);

    if(type==='inc'){
        count++;
    }
    else if(type === 'dec'){
        count--;
        if(count<0){
            return;
        }
    }

    this.setState({count});
    
    // this.setState({count}, ()=>{
    // console.log('count from callback', this.state.count);  
    // });

    // this.setState((state)=>{
    //     return {
    //         count: state.count + 1
    //     };
    // });

    // console.log('count after', this.state.count);
    }

    render() {
        console.log('render', this.state);
        
        return (
            <div>
                <button onClick={()=> this.handleButtonClick('dec')}>
                    Decrement -
            </button>
                <span>{this.state.count}</span>
                <button
                    onClick={()=> this.handleButtonClick('inc')}
                >
                    Increment +
            </button>
            </div>
        );
    }
}

export default Counter;