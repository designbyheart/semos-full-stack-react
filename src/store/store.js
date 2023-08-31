import { configureStore } from '@reduxjs/toolkit'
import {createStore} from "redux";

//export default configureStore({
//    reducer: {
//        
//    }
//})

// create a simple reducer
const reducer = (state = {foo: ''}, action) => {
    switch (action.type) {
        case 'FOO':
            return {...state, foo: action.payload};
            default:
                return state
    }
};
// create a store creator
const makeStore = (initialState) => {
    return createStore(reducer, initialState);
};

export default makeStore;
