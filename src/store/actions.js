import request from '../helpers/request'
import * as actionTypes from './actionTypes';


export function getTasks(){

    return (dispatch)=>{
        dispatch({type: actionTypes.GETTING_TASKS});

        request('http://localhost:3001/task')
        .then(tasks => {
            dispatch({type: actionTypes.GET_TASKS_SUCCESS, tasks});  
        })
        .catch(err => {
            dispatch({type: actionTypes.GET_TASKS_FAILURE, error: err.message});  
        });
    }
}

export function editTask(taskId, data){

    return (dispatch)=>{
        dispatch({type: actionTypes.EDITING_TASK});

        request(`http://localhost:3001/task/${taskId}`, 'PUT', data)
        .then(editedTask => {
            dispatch({type: actionTypes.EDIT_TASK_SUCCESS, editedTask});  
        })
        .catch(err => {
            dispatch({type: actionTypes.EDIT_TASK_FAILURE, error: err.message});  
        });
    }
}