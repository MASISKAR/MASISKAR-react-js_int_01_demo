import React, { PureComponent } from 'react';
import {InputGroup, FormControl, Button } from 'react-bootstrap';


class NewTask extends PureComponent{
state = {
    inputValue: ''
};

handleChange = (event) => {
    this.setState({
        inputValue: event.target.value
    });
};


handleKeyDown = (event) => {
    if (event.key === 'Enter') {
       this.sendValue();
    }
};


sendValue = ()=>{
    const {inputValue} = this.state;

    if (!inputValue) {
        return;
    }
    this.props.onAdd(inputValue);
    this.setState({
        inputValue: ''
    });
}

render(){
const {disabled} = this.props;

    return (
        <InputGroup
        className="my-3"
    >
        <FormControl
            value={this.state.inputValue}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            placeholder="Input task"
            aria-label="Input task"
            aria-describedby="basic-addon2"
            disabled = {disabled}
        />
        <InputGroup.Append>
            <Button
                onClick={this.sendValue}
                variant="outline-primary"
                disabled = {disabled}
            >
                Add task
             </Button>
        </InputGroup.Append>
    </InputGroup>
    );
}


}

export default NewTask;