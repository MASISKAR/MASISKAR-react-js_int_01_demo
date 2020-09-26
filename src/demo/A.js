import React, { Component } from 'react';
// import B from './B';
import D from './D';
import E from './E';

class A extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     };
    //   }
     
    state = {
        name: 'John',
        surname: 'Smith',
        value: "",
    };

saveValue = (value)=>{
this.setState({
    value: value
});
};

render(){

    return (
        <>
       <D data={this.state.name}
       onSendValue = {this.saveValue}
       
       />
       <E 
       data={this.state.value}
       />
       </>
    );
}


}

export default A;