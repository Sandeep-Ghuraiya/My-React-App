import { combineReducers } from 'redux'

import userReducer from './Reducer'


const rootReducer = combineReducers({
    user: userReducer
})

// console.log("go",rootReducer);

export default rootReducer