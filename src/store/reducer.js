import * as actionTypes from './actionTypes';


const defaultState = {
  tasks: [],
  task: null,
  loading: false,
  error: null,
  addTaskSuccess: false,
  removeTasksSuccess: false,
  removeTaskSuccess: false,
  editTaskSuccess: false,
  successMessage: null
};



export const mainReducer = (state = defaultState, action) => {

  const loadingState = {
    ...state,
    loading: true,
    successMessage: null,
    error: null,
  };


  switch (action.type) {
    case actionTypes.LOADING: return loadingState;

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

    case actionTypes.GET_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        task: action.task,
      };
    }

    case actionTypes.ADDING_TASK: 
    return {
      ...loadingState,
      addTaskSuccess: false,
    };

    case actionTypes.ADD_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.task],
        addTaskSuccess: true,
        successMessage: 'Task created successfully!'
      };
    }

    case actionTypes.REMOVING_TASK:  
    return {
      ...loadingState,
      removeTaskSuccess: false,
    };

    case actionTypes.REMOVE_TASK_SUCCESS: {
        const newState = {
          ...state,
          loading: false,
          successMessage: 'Task removed successfully!'
        };


      if(action.from === 'single'){
        return {
         ...newState,
          task: null,
          removeTaskSuccess: true,
        };
      }
      else {
        const newTasks = state.tasks.filter(task => task._id !== action.taskId);

        return {
          ...newState,
          tasks: newTasks
        };
      }


     
    }

    case actionTypes.REMOVING_TASKS: 
    return {
      ...loadingState,
      removeTasksSuccess: false,
    };

    case actionTypes.REMOVE_TASKS_SUCCESS: {
      let newTasks = [...state.tasks];

      action.taskIds.forEach(taskId => {
        newTasks = newTasks.filter(task => task._id !== taskId);
      });

      return {
        ...state,
        loading: false,
        tasks: newTasks,
        removeTasksSuccess: true,
        successMessage: 'Tasks removed successfully!'
      };
    }


    case actionTypes.EDITING_TASK: {
      return {
        ...loadingState,
        editTaskSuccess: false,
      };
    }

    case actionTypes.EDIT_TASK_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        editTaskSuccess: true,
        successMessage: 'Task edited successfully',
      }

      if(action.from === 'single'){
        return {
         ...newState,
          task: action.editedTask
        };
      }
      else {
        const tasks = [...state.tasks];
        const foundIndex = tasks.findIndex(task => task._id === action.editedTask._id);
        tasks[foundIndex] = action.editedTask;
  
        return {
          ...newState,
          tasks: tasks
        };
      }

    }



    default: return state;
  }

};