
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {taskReducer} from './taskReducer';
import {authReducer} from './authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewaresArr = [thunk];
if(process.env.NODE_ENV === "development"){
    middlewaresArr.push(logger);
}

const middlewares = applyMiddleware(...middlewaresArr);

const mainReducer = combineReducers({
    taskReducer,
    authReducer
});


export const store = createStore(mainReducer, composeWithDevTools(middlewares));

