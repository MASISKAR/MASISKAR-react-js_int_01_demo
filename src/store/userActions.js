import request from '../helpers/request';
import * as actionTypes from './userActionTypes';

const apiUrl = process.env.REACT_APP_API_URL;

export function register(data){

    return (dispatch)=>{
        dispatch({type: actionTypes.AUTH_LOADING});

        request(`${apiUrl}/user`, "POST", data)
        .then(response => {
            dispatch({type: actionTypes.REGISTER_SUCCESS, userId: response._id});  
        })
        .catch(err => {
            dispatch({type: actionTypes.AUTH_ERROR, error: err.message});  
        });
    }
}
