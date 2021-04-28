import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'

import promise from 'redux-promise-middleware'

import rootReducer from './rootReducer'

import { composeWithDevTools } from 'redux-devtools-extension';

import {reduxFirestore, getFirestore} from 'redux-firestore'

import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'

import firebaseConfig from '../firebaseConfig'

//debugger
const store = createStore(rootReducer, 
    compose(composeWithDevTools(applyMiddleware(promise, thunk.withExtraArgument({getFirebase, getFirestore}))), 
    reduxFirestore(firebaseConfig), 
    // reactReduxFirebase(firebaseConfig)
    ));


export default store