import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import idGenerator from '../helpers/idGenerator';
import NewTask from './NewTask';
import Task from './Task/Task';
import Confirm from './Confirm';


class ToDo extends Component {
    state = {
        tasks: [],
        checkedTasks: new Set(),
        showConfirm: false
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

    handleCheck = (taskId) => () => {
        const checkedTasks = new Set(this.state.checkedTasks);
        if (checkedTasks.has(taskId)) {
            checkedTasks.delete(taskId);
        }
        else {
            checkedTasks.add(taskId);
        }
        this.setState({ checkedTasks });
    };

    onRemoveSelected = ()=>{
        const checkedTasks = new Set(this.state.checkedTasks);
        let tasks = [...this.state.tasks];

        checkedTasks.forEach(taskId =>{
            tasks = tasks.filter(task => task.id !== taskId);
        });

        checkedTasks.clear();

        this.setState({
            tasks,
            checkedTasks,
            showConfirm: false
        });
    };

    toggleConfirm = ()=>{
        this.setState({
            showConfirm: !this.state.showConfirm
        });
    };

    render() {
        const {checkedTasks, tasks, showConfirm} = this.state;
        const tasksComponents = tasks.map((task) =>
            <Col key={task.id}>
                <Task
                    data={task}
                    onRemove={this.removeTask}
                    onCheck={this.handleCheck(task.id)}
                />
            </Col>
        );

        return (
            <Container fluid={true}>
                <Row >

                    <Col md={{ span: 6, offset: 3 }}>
                        <NewTask
                            onAdd={this.addTask}
                        />
                    </Col>

                </Row>


                <Row>
                    {tasksComponents}
                </Row>
                <Row className='justify-content-center'>
                <Button 
                variant="danger"
                disabled = {checkedTasks.size ? false : true }
                onClick={this.toggleConfirm}
                >
                Remove selected</Button>
                </Row>

                { showConfirm &&
                    <Confirm 
                count = {checkedTasks.size}
                onSubmit = {this.onRemoveSelected}
                onCancel = {this.toggleConfirm}
                />
                }
            </Container>
        );
    }
}

export default ToDo;