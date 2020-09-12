import React, { PureComponent } from 'react';


class D extends PureComponent{
    constructor(props){
        super(props);
      
        console.log('D constructor');
      }
      
      componentDidMount(){
        console.log('D componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('D componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('D componentWillUnmount');
    }


render(){
    console.log('D render');
      
    return (
       <div className="d">
       {this.props.data}
       </div>
    );
}


}

export default D;