import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import idGenerator from '../helpers/idGenerator';

class ToDo extends Component {
    state = {
        inputValue: '',
        tasks: [{
            id: 'sdfsdf',
            text:'sdfsdf'
        }]
    };

    handleInputChange = (event) => {
        console.log(event.key)
        this.setState({
            inputValue: event.target.value
        });
    };

    addTask = () => {
        // const { inputValue, tasks } = this.state;

        // this.setState({
        //     tasks: [...tasks, inputValue]
        // });

        const { inputValue } = this.state;

        const tasks = [...this.state.tasks];
        // const tasks = this.state.tasks.slice();
        // const tasks = [].concat(this.state.tasks.slice();


        tasks.unshift(inputValue);

        this.setState({
            tasks,
            inputValue: ''
        });

    };

    handleKeyDown = (event)=>{
        if(event.key === 'Enter'){
            this.addTask();
        }
    };

    render() {

        const tasksComponents = this.state.tasks
            .map((task, index) => <Col key={idGenerator()}><p>{task}</p></Col>);

// onClick = {()=> this.removeTask(idGenerator())}

        return (
            <Container fluid={true}>
                <Row >

                    <Col md={{ span: 6, offset: 3 }}>
                        <InputGroup
                            className="my-3"
                        >
                            <FormControl
                            value = {this.state.inputValue}
                            onChange={this.handleInputChange}
                            onKeyDown = {this.handleKeyDown}
                                placeholder="Input task"
                                aria-label="Input task"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button
                                    onClick={this.addTask}
                                    variant="outline-primary"
                                >
                                    Add task
                                 </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>

                </Row>


                <Row>

                    {tasksComponents}


                </Row>

            </Container>
        );
    }
}

export default ToDo;