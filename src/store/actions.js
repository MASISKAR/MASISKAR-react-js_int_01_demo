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


export function removeTask(taskId){

    return (dispatch)=>{
        dispatch({type: actionTypes.REMOVING_TASK});

        request(`http://localhost:3001/task/${taskId}`, 'DELETE')
        .then(() => {
            
            dispatch({type: actionTypes.REMOVE_TASK_SUCCESS, taskId});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}

export function removeTasks(data){

    return (dispatch)=>{
        dispatch({type: actionTypes.REMOVING_TASKS});

        request(`http://localhost:3001/task/`, 'PATCH', data)
        .then(() => {
            
            dispatch({type: actionTypes.REMOVE_TASKS_SUCCESS, taskIds: data.tasks});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
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
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}