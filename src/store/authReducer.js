import * as actionTypes from './userActionTypes';


const defaultState = {
userId: null,
registerSuccess: false
};


export const authReducer = (state = defaultState, action) => {
  const loadingState = {
    ...state,
    loading: true,
    successMessage: null,
    error: null,
  };


  switch (action.type) {
    case actionTypes.AUTH_LOADING: return loadingState;

    case actionTypes.AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case actionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        registerSuccess: true,
        successMessage: 'You have successfully registered!!!'
      };
    }

    default: return state;
  }

};