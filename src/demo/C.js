import React, { Component } from 'react';


class C extends Component{
    constructor(props){
        super(props);
      
        console.log('C constructor');
      }
      
      componentDidMount(){
        console.log('C componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('C componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('C componentWillUnmount');
    }

shouldComponentUpdate(nexProps, nextState){
    console.log('C shouldComponentUpdate');
    console.log('C nexProps', nexProps);
    console.log('C nextState', nextState);

    console.log('C state', this.state);
    console.log('C props', this.props);

    if(this.props.name === nexProps.name){
        return false;
    }
    return true;
}

render(){
    console.log('C render');
      
    return (
       <div className="c">
       <button>C</button>
       </div>
    );
}


}

export default C;