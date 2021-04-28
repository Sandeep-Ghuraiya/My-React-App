import { FETCH_USERS, ADD_STORES, } from "./actionType" 


// debugger
//actio creator with thunk
// export const userProject = (myProjects) => (dispatch, getState, {getFirebase, getFirestore}) => dispatch({
//     type: FETCH_USERS,
//     payload: 
//   })

  //ADD USER 
  export const addUser = (items) => {
      return (dispatch, getState, {getFirebase, getFirestore}) => {
    //debugger
    const firestore = getFirestore();
    firestore.collection('myProjects').add({
        ...items,
        createdAt: new Date()
    }).then(() => {
        dispatch({
            type: ADD_STORES,
        payload: items
    })
    })
        
    }
  }
