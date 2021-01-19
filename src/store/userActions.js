import request from '../helpers/request';
import * as actionTypes from './userActionTypes';
import {saveJWT,removeJWT, getLocalJWT} from './../helpers/auth';
import {history} from './../helpers/history';
import {loginRequest, registerRequest} from '../helpers/auth';

const apiUrl = process.env.REACT_APP_API_URL;

export function register(data){

    return (dispatch)=>{
        dispatch({type: actionTypes.AUTH_LOADING});

        registerRequest(data)
        .then(response => {
            dispatch({type: actionTypes.REGISTER_SUCCESS});
            history.push('/login');  
        })
        .catch(err => {
            dispatch({type: actionTypes.AUTH_ERROR, error: err.message});  
        });
    }
}

export function login(data){

    return (dispatch)=>{
        dispatch({type: actionTypes.AUTH_LOADING});

        loginRequest(data)
        .then(token => {
            saveJWT(token);
            dispatch({type: actionTypes.LOGIN_SUCCESS});  
            history.push('/');
        })
        .catch(err => {
            dispatch({type: actionTypes.AUTH_ERROR, error: err.message});  
        });
    }
}

export function logout(){

    return async (dispatch)=>{
        dispatch({type: actionTypes.AUTH_LOADING});
        const jwt = getLocalJWT();
        if(jwt){
            request(`${apiUrl}/user/sign-out`, "POST", {jwt})
            .then(() => {
                removeJWT();
                dispatch({type: actionTypes.LOGOUT_SUCCESS});
                history.push('/login');  
            })
            .catch(err => {
                dispatch({type: actionTypes.AUTH_ERROR, error: err.message});  
            });

        }
        else {
            dispatch({type: actionTypes.LOGOUT_SUCCESS});
            history.push('/login');  
        } 
    }
}


export function getUserInfo(){

    return (dispatch)=>{
        dispatch({type: actionTypes.AUTH_LOADING});

        request(`${apiUrl}/user`)
        .then(data => {
            dispatch({type: actionTypes.GET_USER_INFO_SUCCESS, userInfo: data});  
        })
        .catch(err => {
            dispatch({type: actionTypes.AUTH_ERROR, error: err.message});  
        });
    }
}