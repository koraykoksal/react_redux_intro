import {legacy_createStore as createStore} from 'redux'
import { counterReducer } from './counterReducer'
import { todoReducer } from './todoReducer'
import { combineReducers } from 'redux'


//! store oluşturduk
// export const store = createStore(counterReducer)


//! combineReducer iki farklı reducer birleştirmek için kullanılır.

const rootReducer = combineReducers({
    counterReducer,
    todoReducer,
})

export const store = createStore(rootReducer)

