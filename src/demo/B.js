import React, { Component } from 'react';
import C from './C';

class B extends Component{
    constructor(props){
        super(props);
      this.state = {
          price: props.price,
          rate: "$"
      };
        console.log('B constructor');
      }
     
      componentDidMount(){
        console.log('B componentDidMount');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('B componentDidUpdate');
    console.log('B prevProps', prevProps);
    console.log('B prevState', prevState);

    console.log('B state', this.state);
    console.log('B props', this.props);
    if(prevProps.price < 15 && this.props.price >=15){
        this.setState({
            rate: '֏'
        });
    }

    if(prevProps.price !== this.props.price){
        this.setState({
            price: this.props.price
        });
    }
}

componentWillUnmount(){
    console.log('B componentWillUnmount');
}

// shouldComponentUpdate(nexProps, nextState){
//     if(nexProps.price !== this.props.price){
//         return true;
//     }
//     return false;
// }

render(){
    console.log('B render');

    return (
       <div className="b">
       <button>B</button>
      <p> Price: {this.state.price} {this.state.rate}</p>
      {/* <p> Price: {this.props.price} {this.state.rate}</p> */}

       <C name='some component' />
       </div>
    );
}


}

export default B;