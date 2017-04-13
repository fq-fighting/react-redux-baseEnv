//合并reducers
import { combineReducers } from 'redux'
import HelloWorldRedu from './HelloWorldRedu'

const rootReducer = combineReducers({
    HelloWorldRedu,
})

export default rootReducer