import * as actionTypes from './actionTypes';


const defaultState = {
  tasks: [],
  loading: false,
  error: null,
  addTaskSuccess: false,
  successMessage: null
};

export const mainReducer = (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.LOADING: {
      return {
        ...state,
        loading: true
      };
    }

    case actionTypes.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }


    case actionTypes.GET_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: action.tasks,
      };
    }

    case actionTypes.ADDING_TASK: {
      return {
        ...state,
        loading: true,
        addTaskSuccess: false,
        successMessage: null,
        error: null
      };
    }

    case actionTypes.ADD_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.task],
        addTaskSuccess: true,
        successMessage: 'Task added successfully'
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



    default: return state;
  }

};