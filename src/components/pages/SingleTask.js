import React, { PureComponent } from 'react';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from '../EditTaskModal';
import {getTask, removeTask} from '../../store/actions';
import {connect} from 'react-redux';
import {formatDate} from '../../helpers/utils';

class SingleTask extends PureComponent {
   state = {
       isEdit: false
   };

    componentDidMount(){
        const taskId = this.props.match.params.id;
        this.props.getTask(taskId);
    }

    componentDidUpdate(prevProps){
        if(!prevProps.removeTaskSuccess && this.props.removeTaskSuccess){
            this.props.history.push('/');
        }

        if(!prevProps.editTaskSuccess && this.props.editTaskSuccess){
           this.toggleEditModal();
        }
    }

    handleRemove = ()=>{
        const taskId = this.props.task._id;
        this.props.removeTask(taskId, 'single');
    }

    toggleEditModal = ()=>{
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    render() {
        const {isEdit} = this.state;
        const {task} = this.props;
        return (
        <>
        {
            task ?
            <div >
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Date: {formatDate(task.date)}</p>
            <p>Created: {formatDate(task.created_at)}</p>
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
                    onCancel={this.toggleEditModal}
                    from = 'single'
                    />
                    }
            </div> :
            <div>There is no task!</div>

        }
        </>
   
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        task: state.taskReducer.task,
        removeTaskSuccess: state.taskReducer.removeTaskSuccess,
        editTaskSuccess: state.taskReducer.editTaskSuccess
    };
}

const mapDispatchToProps = {
    getTask,
    removeTask
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleTask);