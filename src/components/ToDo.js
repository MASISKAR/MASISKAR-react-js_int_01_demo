import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import idGenerator from '../helpers/idGenerator';
import NewTask from './NewTask';
import Task from './Task';


class ToDo extends Component {
    state = {
        tasks: []
    };

    addTask = (inputValue) => {
        const tasks = [...this.state.tasks];

        const newTask = {
            id: idGenerator(),
            text: inputValue
        };

        tasks.unshift(newTask);

        this.setState({
            tasks
        });

    };


    removeTask = (taskId) => () => {

        const newTasks = this.state.tasks.filter(task => task.id !== taskId);
        this.setState({
            tasks: newTasks
        });
    };


    render() {
        const tasksComponents = this.state.tasks.map((task) =>
                <Col key={task.id}>
                    <Task 
                    data={task}
                    onRemove = {this.removeTask}
                    />
                </Col>
                );

        return (
            <Container fluid={true}>
                <Row >

                    <Col md={{ span: 6, offset: 3 }}>
                        <NewTask 
                        onAdd = {this.addTask}
                        />
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