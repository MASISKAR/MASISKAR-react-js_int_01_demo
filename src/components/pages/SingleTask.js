import React, { PureComponent } from 'react';
import Spinner from '../Spinner/Spinner';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from '../EditTaskModal';

class SingleTask extends PureComponent {
   state = {
       task: null,
       isEdit: false
   };

    componentDidMount(){
        const taskId = this.props.match.params.id;

        fetch(`http://localhost:3001/task/${taskId}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            }
        })
            .then((response) => response.json())
            .then((task) => {
                if (task.error) {
                    throw task.error;
                }

                    this.setState({
                        task
                    });
           
            })
            .catch((err) => {
                console.log('err', err);
            });


    }

    handleRemove = ()=>{
        const taskId = this.state.task._id;

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

               this.props.history.push('/');

            })
            .catch((err) => {
                console.log('err', err);
            });

    }

    toggleEditModal = ()=>{
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleSave = (taskId, data)=>{
        console.log(taskId, data);
    }

    render() {
        const {task, isEdit} = this.state;

        return (
        <>
        {
            task ?
            <div >
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Date: {task.date.slice(0, 10)}</p>

            <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip>
                                <strong>Edit</strong>
                            </Tooltip>
                        }
                    >
                        <Button
                            title='Edit'
                            className='m-1'
                            variant="info"
                            onClick={this.toggleEditModal}
                            
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                    </OverlayTrigger>


                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip>
                                <strong>Remove</strong>
                            </Tooltip>
                        }
                    >
                        <Button
                            title='Remove'
                            className='m-1'
                            variant="danger"
                            onClick={this.handleRemove}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    </OverlayTrigger>

                    {isEdit && 
                    <EditTaskModal 
                    data={task}
                    onSave={this.handleSave}
                    onCancel={this.toggleEditModal}
                    />
                    }
            </div> :
            <Spinner/>

        }
        </>
   
        );
    }
}

export default SingleTask;