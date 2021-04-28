import {
    ADD_STORES,
  } from "./actionType";
  
  //debugger
  const initialStates = {
    loading: true,
    users: []
  };
  
  const reducer = (state = initialStates, action) => {
    //debugger
    switch (action.type) {
  
      case ADD_STORES:
        return {
          ...state,
          loading: false,
          users: [action.payload],
      };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  
 