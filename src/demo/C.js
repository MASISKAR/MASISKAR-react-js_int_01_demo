import React, {Component} from 'react';

class C extends Component{
state = {
    showRedText: false,
    fruits: ['apple', 'banana', 'pear', 'cherry']
};


    handleClick  = ()=>{
        this.setState({
            showRedText: !this.state.showRedText
        });
    };

    render(){
        const {showRedText, fruits} = this.state;

        // const fruitsComponents = [
        //     <li>apple</li>,
        //     <li>banana</li>,
        //     <li>pear</li>
        // ];

       const fruitsComponents = fruits.map((fruit, i)=>{
        return <li key={i}>{fruit}</li>;
       });

        return (
            <>
            <div>{this.props.text}</div>
            <input 
            type="button" 
            value='Show'
            onClick = {this.handleClick}
            />
            {
                showRedText && 
            <p style={{color: "red"}}>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet adipisicing elit. Numquam, sed.</p>
         
            }
            <ol>
            {fruitsComponents}
            </ol>
            </>
        );
    }
}

export default C;