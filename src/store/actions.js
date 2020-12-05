import request from '../helpers/request'
import * as actionTypes from './actionTypes';


export function getTasks(){

    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request('http://localhost:3001/task')
        .then(tasks => {
            dispatch({type: actionTypes.GET_TASKS_SUCCESS, tasks});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}

export function addTask(data){

    return (dispatch)=>{
        dispatch({type: actionTypes.ADDING_TASK});

        request('http://localhost:3001/task', 'POST', data)
        .then(task => {
            dispatch({type: actionTypes.ADD_TASK_SUCCESS, task});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}

export function editTask(taskId, data){

    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request(`http://localhost:3001/task/${taskId}`, 'PUT', data)
        .then(editedTask => {
            dispatch({type: actionTypes.EDIT_TASK_SUCCESS, editedTask});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}