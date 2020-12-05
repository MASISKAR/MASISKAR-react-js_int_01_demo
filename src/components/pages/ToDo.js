import React, { PureComponent } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NewTask from '../NewTask/NewTask';
import Task from '../Task/Task';
import Confirm from '../Confirm';
import EditTaskModal from '../EditTaskModal';
import {connect} from 'react-redux';
import {getTasks} from '../../store/actions';

class ToDo extends PureComponent {
    state = {
        checkedTasks: new Set(),
        showConfirm: false,
        editTask: null,
        openNewTaskModal: false
    };

    componentDidMount() {
        this.props.getTasks();
    }

    componentDidUpdate(prevProps){

    if(!prevProps.addTaskSuccess && this.props.addTaskSuccess){
        this.setState({
            openNewTaskModal: false
        });
    }


    }


    removeTask = (taskId) => () => {
        fetch(`http://localhost:3001/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    throw data.error;
                }

                const newTasks = this.state.tasks.filter(task => task._id !== taskId);
                this.setState({
                    tasks: newTasks
                });

            })
            .catch((err) => {
                console.log('err', err);
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

    handleEdit = (task) => () => {
        this.setState({ editTask: task });
    };

    onRemoveSelected = () => {
        const checkedTasks = new Set(this.state.checkedTasks);

        fetch(`http://localhost:3001/task/`, {
            method: 'PATCH',
            body: JSON.stringify({
                tasks: [...checkedTasks]
            }),
            headers: {
                "Content-Type": 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    throw data.error;
                }
                let tasks = [...this.state.tasks];

                checkedTasks.forEach(taskId => {
                    tasks = tasks.filter(task => task._id !== taskId);
                });

                checkedTasks.clear();

                this.setState({
                    tasks,
                    checkedTasks,
                    showConfirm: false
                });

            })
            .catch((err) => {
                console.log('err', err);
            });



    };

    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm
        });
    };

    handleSave = (taskId, data) => {
        fetch(`http://localhost:3001/task/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json',
            }
        })
            .then((response) => response.json())
            .then((editedTask) => {
                
                if (editedTask.error) {
                    throw editedTask.error;
                }
                const tasks = [...this.state.tasks];
                    const foundIndex = tasks.findIndex(task => task._id === editedTask._id);
                    tasks[foundIndex] = editedTask;

                this.setState({ tasks, editTask: null });
            })
            .catch((err) => {
                console.log('err', err);
            });





    };

    toggleNewTaskModal = () => {
        this.setState({
            openNewTaskModal: !this.state.openNewTaskModal
        });
    };

    render() {
        const { checkedTasks, showConfirm, editTask } = this.state;
        const {tasks} = this.props;

        const tasksComponents = tasks.map((task) =>
            <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Task
                    data={task}
                    onRemove={this.removeTask}
                    onCheck={this.handleCheck(task._id)}
                    onEdit={this.handleEdit(task)}
                    disabled={!!checkedTasks.size}
                />
            </Col>
        );

        return (

            <Container fluid={true}>
                <Row >

                    <Col md={{ span: 6, offset: 3 }} className="text-center">
                        <Button
                            variant="primary"
                            className='m-3'
                            disabled={checkedTasks.size}
                            onClick={this.toggleNewTaskModal}
                        >
                            Add new Task
            </Button>

                    </Col>

                </Row>


                <Row>
                    {tasksComponents}
                </Row>
                <Row className='justify-content-center'>
                    <Button
                        variant="danger"
                        disabled={!checkedTasks.size}
                        onClick={this.toggleConfirm}
                    >
                        Remove selected
                </Button>
                </Row>

                { showConfirm &&
                    <Confirm
                        count={checkedTasks.size}
                        onSubmit={this.onRemoveSelected}
                        onCancel={this.toggleConfirm}
                    />
                }
                {!!editTask &&
                    <EditTaskModal
                        data = {editTask}
                        onSave={this.handleSave}
                        onCancel={this.handleEdit(null)}
                    />
                }

                { this.state.openNewTaskModal &&
                    <NewTask
                        onCancel={this.toggleNewTaskModal}
                    />
                }
                
            </Container>

            );
    }
}

// export default ToDo;

const mapStateToProps = (state)=>{
 return {
    tasks: state.tasks,
    addTaskSuccess: state.addTaskSuccess
 };
};


const mapDispatchToProps = {
    getTasks: getTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);