import {store} from '../store/store';
import {LOGOUT_SUCCESS} from '../store/userActionTypes';
import {history} from '../helpers/history';
import decode from 'jwt-decode';
const apiUrl = process.env.REACT_APP_API_URL;


export function saveJWT(data) {
    localStorage.setItem('token', JSON.stringify(data));
}

export function removeJWT() {
    localStorage.removeItem('token');
}

export function getJWT() {
    const token = localStorage.getItem('token');
    if (!token) {
        logout();
        return null;
    }

const parsed = JSON.parse(token);

const decoded = decode(parsed.jwt);

    if(decoded.exp - Date.now()/1000 < 60){
      return fetch(`${apiUrl}/user/${decoded.userId}/token`, {
           method: "PUT",
           headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ refreshToken:  parsed.refreshToken})
       })
       .then((response) => response.json())
       .then((newToken) => {
           if (newToken.error) {
               throw newToken.error;
           }
           saveJWT(newToken);
           return newToken.jwt;
       })
       .catch(()=>{
        logout();
        return null;
       });

    }

    return Promise.resolve(parsed.jwt);
}

export function checkLoginStatus() {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    return true;
}


export function loginRequest(data) {
    return request(data, 'login');
}

export function registerRequest(data) {
    return request(data, 'register');
}


function request(data, type) {
    const config = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(data)
    };
    
    let url;
    if(type==='login'){
        url = `${apiUrl}/user/sign-in`;
    }
    else if(type==='register'){
        url = `${apiUrl}/user`;
    }
    
    return fetch(url, config)
        .then((response) => response.json())
        .then((result) => {
            if (result.error) {
                throw result.error;
            }
            return result;
        });
    }


    function logout(){
        store.dispatch({type: LOGOUT_SUCCESS});
        removeJWT();
        history.push('/login'); 
    }

    export function getLocalJWT(){
        const token = localStorage.getItem('token');
        if (!token) {
            return null;
        }
    
    return JSON.parse(token).jwt;
    
    }