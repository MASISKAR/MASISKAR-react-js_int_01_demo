
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {mainReducer} from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


if(process.env.NODE_ENV === "development"){

}

const middlewares = applyMiddleware(thunk, logger);

export const store = createStore(mainReducer, composeWithDevTools(middlewares));

