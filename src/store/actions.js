import request from '../helpers/request'
import * as actionTypes from './actionTypes';

const apiUrl = process.env.REACT_APP_API_URL;

export function getTask(taskId){

    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request(`${apiUrl}/task/${taskId}`)
        .then(task => {
            dispatch({type: actionTypes.GET_TASK_SUCCESS, task});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}

export function getTasks(params={}){
let url = `${apiUrl}/task`;

let query="?";
for(let key in params){
query+= `${key}=${params[key]}&`;
}

if(query !== "?"){ 
    url+= query
}

    return (dispatch)=>{
        dispatch({type: actionTypes.LOADING});

        request(url)
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

        request(`${apiUrl}/task`, 'POST', data)
        .then(task => {
            dispatch({type: actionTypes.ADD_TASK_SUCCESS, task});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}


export function removeTask(taskId, from='tasks'){

    return (dispatch)=>{
        dispatch({type: actionTypes.REMOVING_TASK});

        request(`${apiUrl}/task/${taskId}`, 'DELETE')
        .then(() => {
            dispatch({type: actionTypes.REMOVE_TASK_SUCCESS, taskId, from});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}

export function removeTasks(data){

    return (dispatch)=>{
        dispatch({type: actionTypes.REMOVING_TASKS});

        request(`${apiUrl}/task/`, 'PATCH', data)
        .then(() => {
            
            dispatch({type: actionTypes.REMOVE_TASKS_SUCCESS, taskIds: data.tasks});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}

export function editTask(taskId, data, from='tasks'){

    return (dispatch)=>{
        dispatch({type: actionTypes.EDITING_TASK});

        request(`${apiUrl}/task/${taskId}`, 'PUT', data)
        .then(editedTask => {
            dispatch({type: actionTypes.EDIT_TASK_SUCCESS, editedTask, from});  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}

export function changeTaskStatus(taskId, data, from='tasks'){

    return (dispatch)=>{
        dispatch({type: actionTypes.CHANGING_TASK_STATUS});

        request(`${apiUrl}/task/${taskId}`, 'PUT', data)
        .then(editedTask => {
            dispatch({
                type: actionTypes.CHANGE_TASK_STATUS_SUCCESS, 
                editedTask, 
                from,
                status: data.status
            });  
        })
        .catch(err => {
            dispatch({type: actionTypes.ERROR, error: err.message});  
        });
    }
}