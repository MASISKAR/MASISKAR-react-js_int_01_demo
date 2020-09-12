import React, { Component } from 'react';
import B from './B';
import D from './D';
import E from './E';


class A extends Component{
    constructor(props){
        super(props);
      
        console.log('A constructor');
        this.state = {
            show: true,
            price: 10,
            value: ''
        };
      }
      
      componentDidMount(){
          console.log('A componentDidMount');
    }

    componentDidUpdate(){
        console.log('A componentDidUpdate');

    }

      toggleBlock = ()=> {
            this.setState({
                show: !this.state.show
            });
      }

      changePrice = ()=> {
        this.setState({
            price: this.state.price+1
        });
  }

  componentWillUnmount(){
    console.log('A componentWillUnmount');

}

handleInputChange = (event)=>{
    this.setState({
        value: event.target.value
    })
}

render(){
    console.log('A render');
      
    return (
       <div className="a">
       <button onClick={this.toggleBlock}>A</button>
       <button onClick={this.changePrice}>Change price</button>
        <input value={this.state.value} type='text' onChange={this.handleInputChange}/>
      <p>{this.state.value}</p>

        {
           this.state.show && 
           <B price={this.state.price}/> 
       }
       <D data={this.state.price}/>
       <E data={this.state.price}/>

       </div>
    );
}


}

export default A;