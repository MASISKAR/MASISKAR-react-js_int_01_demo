const defaultState = {
    test: true,
    value: 10,
    connected: true,
    count: 50
  };

  export const mainReducer = (state = defaultState, action)=>{

    switch(action.type){
    case 'CHANGE_COUNT': {
          return {
            ...state,
            count: state.count + action.value
          };
    }
    default: return state;
    }
    
    };