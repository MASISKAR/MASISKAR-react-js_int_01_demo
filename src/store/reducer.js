import * as actionTypes from './actionTypes';


const defaultState = {
  tasks: [],
  loading: false,
  error: null
};

export const mainReducer = (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.GETTING_TASKS: {
      return {
        ...state,
        loading: true
      };
    }
    case actionTypes.GET_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: action.tasks
      };
    }
    case actionTypes.GET_TASKS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case actionTypes.EDITING_TASK: {
      return {
        ...state,
        loading: true
      };
    }
    case actionTypes.EDIT_TASK_SUCCESS: {
      const tasks = [state.tasks];
      const foundIndex = tasks.findIndex(task => task._id === action.editedTask._id);
      tasks[foundIndex] = action.editedTask;

      return {
        ...state,
        loading: false,
        tasks: tasks
      };
    }

    case actionTypes.EDIT_TASK_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    default: return state;
  }

};