import request from '../helpers/request';
import * as actionTypes from './userActionTypes';
import {saveJWT,removeJWT, getJWT} from './../helpers/auth';

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

export function login(data){

    return (dispatch)=>{
        dispatch({type: actionTypes.AUTH_LOADING});

        request(`${apiUrl}/user/sign-in`, "POST", data)
        .then(token => {
            saveJWT(token);
            //redirect to home page
            dispatch({type: actionTypes.LOGIN_SUCCESS});  
        })
        .catch(err => {
            dispatch({type: actionTypes.AUTH_ERROR, error: err.message});  
        });
    }
}

export function logout(){

    return (dispatch)=>{
        dispatch({type: actionTypes.AUTH_LOADING});

        request(`${apiUrl}/user/sign-out`, "POST", {jwt: getJWT()})
        .then(() => {
            removeJWT();
            //redirect to login page
            dispatch({type: actionTypes.LOGOUT_SUCCESS});  
        })
        .catch(err => {
            dispatch({type: actionTypes.AUTH_ERROR, error: err.message});  
        });
    }
}